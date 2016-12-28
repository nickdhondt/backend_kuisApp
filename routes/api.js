let express = require('express');
let router = express.Router();

let bodyParser = require('body-parser');

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

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Firebase-ID-Token");
    next();
});

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

router.get('/userbyuid/:user', firebaseAuthenticator, function (req, res, next) {
    let user = req.params.user;

    process.on("mysqlError", (err) => {
        return next(err);
    });

    User.getUserByUID(user, firebaseAuthenticator, function (user) {
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
                        Task.getTasksTodoByHouseholdID(user.household_id, 7, user, (user, tasksTodo) => {
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

    process.on("mysqlError", (err) => {
        return next(err);
    });

    User.addUser(res.locals.firebaseUser, function (user) {

        res.json(user);
        res.end();

    });


});

//af: steven
//controle door:
router.post('/updateuser', function (req, res, next) {
    process.on("mysqlError", (err) =>{
        return next(err);
    });
    let body = req.body;
    User.updateUser(body,function (user) {
        res.json({body: user});
        res.end();
    })

});

//af: steven
//controle door:
router.post('/updatehousehold', firebaseAuthenticator, function (req, res, next) {
    process.on("mysqlError", (err) => {
        return next(err);
    });
    let body = req.body;
    Household.updateHousehold(body, function (household) {
        res.json({body: household});
        res.end();
    })
});

router.post('/addusertohousehold', firebaseAuthenticator, function (req, res, next) {



    // TODO: code hier


});

//af: bart
//controle door: Nick

router.get('/householdbyemail/:email', firebaseAuthenticator, function (req, res, next) {
    //parameter
    let email = req.params.email;

    process.on("mysqlError", (err) => {
        return next(err);
    });

    Household.getHouseholdByEmail(email, function (household) {
        res.json(household);
        res.end();
    });
});

//af: bart
//controle door:
router.get('/household', firebaseAuthenticator, function (req, res, next) {

    process.on("mysqlError", (err) => {
        return next(err);
    });

    Household.getHouseholdByUID(res.locals.uid, function (household) {

        res.json(household);
        res.end();

    });
});

router.post('/leavehousehold', firebaseAuthenticator, function (req, res) {



    // TODO: code hier


});

router.post('/addhousehold', firebaseAuthenticator, function (req, res) {
    process.on("mysqlError", (err) => {
        return next(err);
    });
    let body = req.body;
    Household.addHousehold(body, function (body) {

        //TODO user meteen aan household toevoegen
        res.json({body: body});
        res.end();
    })
});

//af: bart
//controle door: Nick
router.get('/taskstodobyhousehold/:household/:term?', firebaseAuthenticator, function (req, res, next) {
    let term = 7;
    if (req.params.term !== undefined) term = parseInt(req.params.term);
    let household = parseInt(req.params.household);

    if (!isNaN(household)) {
        Task.getTasksTodoByHouseholdID(household, term, null, function (obj, tasks) {
            res.json(tasks);
            res.end();
        });
    }
    else {
        Task.getTasksTodoByUID(res.locals.uid, term, null, function (obj, tasks) {
            res.json(tasks);
            res.end();
        })
    }

    process.on("mysqlError", (err) => {
        return next(err);
    });
});

//af: bart
//controle door:
router.get('/tasksbytoken', firebaseAuthenticator, function (req, res, next) {
    Task.getTasksUID(res.locals.uid, null, function (obj, tasks) {
        res.json(tasks);
        res.end();
    });
    process.on("mysqlError", (err) => {
        return next(err);
    });
});

//af: steven
//controle door:
router.post('/addtask', firebaseAuthenticator, function (req, res, next) {
    process.on("mysqlError", (err) => {
        return next(err);
    });
    let body = req.body;
    Task.addTask(body, function (body) {
        res.json({body: body});
        res.end(); //comment
    })

});

//af: steven
//controle door:
router.post('/updatetask', firebaseAuthenticator, function (req, res, next) {
    process.on("mysqlError", (err) => {
        return next(err);
    });
    let body = req.body;
    Task.updateTask(body, function (body) {
        res.json({body: body});
        res.end();
    })
});

router.post('/finishtask', firebaseAuthenticator, function (req, res, next) {



    // TODO: code hier


});

//af: steven
//controle door: nick
router.get('/deletetask/:task', firebaseAuthenticator, function (req, res, next) {
    process.on("mysqlError", (err) => {
        return next(err);
    });

    let task = req.params.task;
    Task.deleteTask(task, function (task) {
        res.json(task);
        res.end();
    });

});

router.post('/addaward', firebaseAuthenticator, function (req, res, next) {
    process.on("mysqlError", (err) => {
        return next(err);
    });
    let body = req.body;
    let household_id = body.household_id;
    Award.countAwardsFromHousehold(household_id, function (rows) {
        if (rows[0].awardsCount > 0) {
            //TODO: bestaande taak wegschrijven naar mongodb
            //update van de bestaande award
            Award.updateAwardFromHousehold(body, function (body) {
                res.json({body: body});
                res.end();
            })
        } else {
            //nieuwe award voor huishouden invoegen
            Award.addAward(body, function (body) {
                res.json({body: body});
                res.end();
            })
        }
    });

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
    process.on("mysqlError", (err) => {
        return next(err);
    });
    let body = req.body;
    Task.addTask(body, function (body) {
        res.json({body: body});
        res.end();
    })
});
// router.use(apiNotFound);
// router.use(apiErrorHandling);

module.exports = router;
