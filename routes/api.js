let express = require('express');
let router = express.Router();

let bodyParser = require('body-parser');
let moment = require("moment");

let mysql = require('mysql');
let conn = require('../helpers/connection')(mysql);

let firebaseAuthenticator = require("../middleware/firebase-authenticator");
let apiNotFound = require("../middleware/api-not-found");
let apiErrorHandling = require("../middleware/api-error-handling");

let User = require("../models/User");
let Household = require("../models/Household");
let Award = require("../models/Award");
let Task = require("../models/Task");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));

router.get('/', function (req, res) {
  let routes = [];

  for (let route of router.stack) {
    let methods;
    let path;

    if (route.route !== undefined) {
      path = route.route.path;
      methods = Object.getOwnPropertyNames(route.route.methods);

      routes.push({
        path: "api" + path,
        methods: methods
      });
    }
  }

  res.render('routes', {title: 'The Cleansing API routes', routes: routes});
  res.end();
});

router.get('/userbyuid/:user', function (req, res, next) {
  let user = req.params.user;

  process.on("mysqlError", (err) => {
    return next(err);
  });

  User.getUserByUID(user, function (user) {
    if (user !== undefined && user.household_id !== null) {
      Household.getHouseholdByID(user.household_id, user, (user, household) => {
        user.household = household;
        // TODO: haal stats op
        let statsTasks = {
          countFinishedTasks: 672,
          countTotalScore: 5728,
          countTasks: 52,
          mostPopularTask: "Name of task"
        };

        let statsAwards = {
          countFinishedAwards: 65,
          mostAwardsWon: "User",
          lastAward: "Name of award",
          lastAwardWonBy: "User or collection of users"
        };

        user = Object.assign(user, statsTasks, statsAwards);

        Task.getTasksByHouseholdID(household.id, user, (user, tasks) => {
          user.household.tasks = tasks;
          User.getUsersByHouseholdID(user.household_id, user, (user, users) => {
            user.household.users = users;
            Task.getTasksTodoByHouseholdID(user.household_id, user, (user, tasksTodo) => {
              user.household.taskstodo = tasksTodo;
              Award.getAwardByHouseholdID(user.household_id, user, (user, award) => {
                if (award !== undefined) {
                  let awardTerm = "day"; // Change to "month" for production

                  let awardDate = moment(award.month, "YYYY-MM-DD");
                  let now = moment().subtract(1, awardTerm);

                  if (awardDate.isBefore(now)) {
                    // TODO: verhuis award naar mongo

                    Award.deleteAwardByHouseholdID(user.household.id);
                  } else user.household.award = award;

                  res.json(user);
                  res.end();
                } else {
                  res.json(user);
                  res.end();
                }
              })
            })
          });
        })
      })
    } else {
      res.json(user);
      res.end();
    }
  })
});

router.post('/adduser', firebaseAuthenticator, function (req, res, next) {


  // TODO: code hier


});

router.post('/updateuser', firebaseAuthenticator, function (req, res, next) {



  // TODO: code hier


});

router.post('/updatehousehold', firebaseAuthenticator, function (req, res, next) {



  // TODO: code hier


});

router.post('/addusertohousehold', firebaseAuthenticator, function (req, res, next) {



  // TODO: code hier


});

//af: bart
//controle door: (is maar een ideetje hoor)
// TODO: fix

router.get('/householdbyemail/:email', firebaseAuthenticator, function (req, res, next) {

  //parameter
  let email = req.params.email;

  //query
  //opletten voor sqlinjection! gebruik '?' !
  conn.query("select `households`.* from `households` " +
    "inner join `users` on `users`.`household_id` = `households`.`id`" +
    "where `email` = ? limit 1", [email],
    function (err, rows, fields) {
      if (err) return next(err);

      let result = rows[0];

      res.json(result);
      res.end();
    });

});

router.post('/leavehousehold', firebaseAuthenticator, function (req, res) {



  // TODO: code hier


});

router.post('/addhousehold', firebaseAuthenticator, function (req, res) {



  // TODO: code hier


});

//af: bart
//controle door:
// TODO: fix
router.get('/taskstodobyhousehold/:household/:term?', firebaseAuthenticator, function (req, res, next) {
  let term = 7;
  if (req.params.term !== undefined) term = parseInt(req.params.term);
  let household = parseInt(req.params.household);

  let termDate = new Date();
  termDate.setDate(termDate.getDate() + term);

  let result;

  conn.query("select * from `tasks` " +
    "where duedate < ? " +
    "and household_id = ?", [termDate, household],

    function (err, rows, fields) {
      //TODO: onze error handling uitleggen op de examens
      if (err) return next(err);

      result = rows;

      res.json(result);
      res.end();
    });

});

router.post('/addtask', function (req, res, next) {
  let body = req.body;
  let post = [
    body.description,
    body.household_id,
    body.period,
    body.points,
    body.name,
    body.dueDate,
    body.assigned_to
  ];//comment
  conn.query("insert into `tasks` (`description`, `household_id`, `period`, `points`, `name`, `dueDate`, `assigned_to`) values (?, ?, ?, ?, ?, ?, ?)", post, function (err, res) {
    if (err) return next(err);
    res.json({body: body});
    res.end();
  });
});

router.post('/updatetask', firebaseAuthenticator, function (req, res, next) {
  let body = req.body;
  conn.query("update", body, function (err, res) {
    if (err) return next(err);
    res.json({body: body});
    res.end();
  })


});

router.post('/finishtask', firebaseAuthenticator, function (req, res, next) {



  // TODO: code hier


});

router.get('/deletetask/:task', firebaseAuthenticator, function (req, res, next) {

  let task = req.params.task;
  conn.query("delete from `tasks` " +
    "where id = ?", [task],
    function (err, result) {
      if (err) return next(err);
      res.json(result.rowsAffected);
      res.end();
    });

});

router.post('/addaward', firebaseAuthenticator, function (req, res, next) {
  let body = req.body;
  conn.query("insert into awards values ?", body, function (err, result) {
    if (err) return next(err);
    res.json({body: body});
    res.end();
  })

});

router.get('/importtasks/:household/:assignusers?', firebaseAuthenticator, function (req, res, next) {

  let assignUsers = 7;
  if (req.params.term !== undefined) assignUsers = parseB(req.params.assignusers.toLowerCase() === "true");
  let household = parseInt(req.params.household);


  // TODO: code hier


  res.json({params: {household: household, assignUsers: assignUsers}});
  res.end();

});

router.post('/addtasks', firebaseAuthenticator, function (req, res, next) {

  let body = req.body;
  let post = {
    id: body.id,
    name: body.name,
    duedate: body.duedate,
    description: body.description,
    period: body.period,
    assigned_to: body.assigned_to,
    username: body.username,
    householdId: body.householdId,
    points: body.points
  };
  conn.query("insert into `tasks` values ? ", post, function (err, res) {
    if (err) return next(err);
    res.json({body: body});
    res.end();
  });

});

// router.use(apiNotFound);
// router.use(apiErrorHandling);

module.exports = router;
