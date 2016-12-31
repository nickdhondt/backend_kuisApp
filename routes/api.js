let express = require('express');
let router = express.Router();

let bodyParser = require('body-parser');

let fs = require('fs');
let mysql = require('mysql');
let conn = require('../helpers/connection')(mysql);

let firebaseAuthenticator = require("../middleware/firebase-authenticator");
let apiNotFound = require("../middleware/api-not-found");
let apiErrorHandling = require("../middleware/api-error-handling");


let User = require("../models/User");
let Household = require("../models/Household");
let Award = require("../models/Award");
let Task = require("../models/Task");

let repo = require("../repo/repo");

let moment = require("moment");
let FinishedTask = require('../Mongo/MongoDB_Models/finishedtask.model');
let FinishedAward = require('../Mongo/MongoDB_Models/finishedaward.model');


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

router.get('/userlimited', firebaseAuthenticator, function (req, res, next) {

    process.on("mysqlError", (err) => {
        return next(err);
    });

    User.getUserByUID(res.locals.uid, (user) => {
        res.json(user);
        res.end();
    })

});

router.get('/userbyuid/:user', firebaseAuthenticator, function (req, res, next) {

    //do not remove! req.params nodig voor redirect
    let user = res.locals.uid | req.params.user;

    console.log(user);

    process.on("mysqlError", (err) => {
        return next(err);
    });

    repo.getUserByUIDBart(user, (user) => {

        res.json(user);
        res.end();

    });

    // User.getUserByUID(user, function (user) {
    //
    //     if (user !== undefined && user.household_id !== null) {
    //         Household.getHouseholdByID(user.household_id, user, (user, household) => {
    //             user.household = household;
    //             // TODO: haal stats op
    //             let statsTasks = {
    //                 countFinishedTasks: 672,
    //                 countTotalScore: 5728,
    //                 countTasks: 52,
    //                 mostPopularTask: "Name of task"
    //             };
    //
    //             let statsAwards = {
    //                 countFinishedAwards: 65,
    //                 mostAwardsWon: "User",
    //                 lastAward: "Name of award",
    //                 lastAwardWonBy: "User or collection of users"
    //             };
    //
    //             user.household = Object.assign(user.household, statsTasks, statsAwards);
    //
    //             Task.getTasksByHouseholdID(household.id, user, (user, tasks) => {
    //                 user.household.tasks = tasks;
    //                 User.getUsersByHouseholdID(user.household_id, user, (user, users) => {
    //                     user.household.users = users;
    //                     Task.getTasksTodoByHouseholdID(user.household_id, 7, user, (user, tasksTodo) => {
    //                         user.household.taskstodo = tasksTodo;
    //                         Award.getAwardByHouseholdID(user.household_id, user, (user, award) => {
    //
    //
    //                             if (award !== undefined) {
    //                                 let awardTerm = "day"; // Change to "month" for production
    //
    //                                 let awardDate = moment(award.month, "YYYY-MM-DD");
    //                                 let now = moment().subtract(1, awardTerm);
    //
    //                                 award.month = moment(award.month).format("YYYY-MM-DD");
    //
    //                                 if (awardDate.isBefore(now)) {
    //                                     // TODO: verhuis award naar mongo https://github.com/BartDelrue/backend_kuisApp/blob/master/routes/api.php#L65
    //
    //                                     // process.emit("award-winner", winnerID);
    //
    //                                     Award.deleteAwardByHouseholdID(user.household.id);
    //
    //                                     Household.resetScores(household);
    //
    //                                     award = null;
    //                                 }
    //
    //                                 user.household.award = award;
    //
    //                                 res.json(user);
    //                                 res.end();
    //                             } else {
    //                                 user.household.award = null;
    //                                 res.json(user);
    //                                 res.end();
    //                             }
    //                         })
    //                     })
    //                 });
    //             })
    //         })
    //     } else {
    //         res.json(user);
    //         res.end();
    //     }
    // })
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
    process.on("mysqlError", (err) => {
        return next(err);
    });
    let body = req.body;
    User.updateUser(body, function (user) {
        res.json(user);
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
        res.json(household);
        res.end();
    })
});

//af: steven
//controle door: Bart
router.post('/addusertohousehold', firebaseAuthenticator, function (req, res, next) {
    process.on("mysqlError", (err) => {
        return next(err);
    });
    let body = req.body;
    let householdId = body.household_id;
    let uid = res.locals.uid;

    Household.addUserToHousehold(householdId, uid, function () {

        //moet zo, kan headers niet instellen bij redirect
        res.redirect('/api/userbyuid/' + uid);

    })
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

//af: steven
// controle door: Bart
router.post('/leavehousehold', firebaseAuthenticator, function (req, res) {
    process.on("mysqlError", (err) => {
        return next(err);
    });
    let body = req.body;
    Household.leaveHousehold(body, function (body) {

        res.redirect('/api/userbyuid/' + res.locals.uid);

    })
});

//af: steven
//controle door: Bart
router.post('/addhousehold', firebaseAuthenticator, function (req, res) {
    process.on("mysqlError", (err) => {
        return next(err);
    });
    let body = req.body;

    Household.addHousehold(body, function (household) {

        res.json(household);
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
//controle door: Bart
router.post('/addtask', firebaseAuthenticator, function (req, res, next) {
    process.on("mysqlError", (err) => {
        return next(err);
    });
    let body = req.body;
    if(body.dueDate === null || body.household_id == null){
        let message = [];
        message.push("geen geldige task");
        message.push(req.body);
        res.status(500).send(message);
        res.end();
    }else{
        Task.addTask(body, function (body) {
            res.json(body);
            res.end();
        })
    }
});

//af: steven
//controle door: Bart
router.post('/updatetask', firebaseAuthenticator, function (req, res, next) {
    process.on("mysqlError", (err) => {
        return next(err);
    });
    let body = req.body;
    Task.updateTask(body, function (body) {
        res.json(body);
        res.end();
    })
});

router.post('/finishtask', function (req, res, next) {
    process.on("mysqlError", (err) => {
        return next(err);
    });

    let format = 'we require this kind of object: {"id":"7","done":true,"finished_by":"uidstring","finished_on":"2016-10-10"}';

    if (!req.body.id) return next(new Error(format));
    let id = Number(req.body.id);
    if (req.body.done === undefined) return next(new Error(format));
    let done = req.body.done;
    if (!req.body.finished_by) return next(new Error(format));
    let finished_by = req.body.finished_by;
    if (!req.body.finished_on) return next(new Error(format));
    let finished_on = req.body.finished_on;

    User.getUserByUID(finished_by, function (user) {
        if (user === undefined) return next(new Error("user not found"));
        Task.getTaskByID(id, function (originalTask) {

            let newFinishedtask = FinishedTask({
                id: id,
                name: originalTask.name,
                dueDate: originalTask.dueDate,
                description: originalTask.description,
                period: originalTask.period,
                household_id: originalTask.household_id,
                assigned_to: originalTask.assigned_to,
                points: originalTask.points,
                done: done,
                finished_by: finished_by,
                finished_on: finished_on
            });

            newFinishedtask.save(function (err) {
                if (err) return next(err);

                if (done) {
                    user.score += originalTask.points;
                    User.updateUser(user, function () {});
                }

                let nextDue = moment(originalTask.dueDate).add(originalTask.period, "day");

                while(nextDue.isBefore(moment())) {
                    nextDue = moment(nextDue).add(originalTask.period, "day");

                    let newFinishedtask = FinishedTask({
                        id: id,
                        name: originalTask.name,
                        dueDate: originalTask.dueDate,
                        description: originalTask.description,
                        period: originalTask.period,
                        household_id: originalTask.household_id,
                        assigned_to: originalTask.assigned_to,
                        points: originalTask.points,
                        done: done,
                        finished_by: finished_by,
                        finished_on: finished_on
                    });

                    newFinishedtask.save(function (err) {});
                }

                originalTask.dueDate = nextDue.format("YYYY-MM-DD");

                User.getUsersByHouseholdID(originalTask.household_id, null, function (obj, users) {
                    let newUser = -1;
                    for(let user of users) {
                        if (user.id > originalTask.assigned_to) {
                            newUser = user.id;
                            break;
                        }
                    }

                    if (newUser === -1) newUser = users[0].id;

                    originalTask.assigned_to = newUser;

                    Task.updateTask(originalTask, function () {

                        let finishedTaskData = {taskID: id, userID: user.id, householdID: originalTask.household_id, done: done};
                        process.emit("task-finished", finishedTaskData);

                        res.json(originalTask);
                        res.end();
                    });
                });
            });
        });
    });
});

//todo mag weg?
router.post('/finishaward', firebaseAuthenticator, function (req, res) {


    // let newFinishedAward = FinishedAward({
    //     id: req.body.id,
    //     name: req.body.name,
    //     description: req.body.description,
    //     month: req.body.month,
    //     winner_id: req.body.winner_id,
    //     household_id: req.body.household_id,
    //     users: req.body.users,
    //     creator_id: req.body.creator_id
    //
    // });
    //
    // newFinishedAward.save(function (err) {
    //     if (err) return next(err);
    //
    //     console.log("FinishedAward send do mongoDB");
    // })
    //
    // res.json({});
    // res.end();
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
    console.log(req);
    // process.on("mysqlError", (err) => {
    //     return next(err);
    // });
    // let body = req.body;
    // let household_id = body.household_id;
    // Award.countAwardsFromHousehold(household_id, function (rows) {
    //     if (rows[0].awardsCount > 0) {
    //         //update van de bestaande award
    //         Award.updateAwardFromHousehold(body, function (body) {
    //             res.json(body);
    //             res.end();
    //         })
    //     } else {
    //         //nieuwe award voor huishouden invoegen
    //         Award.addAward(body, function (body) {
    //             res.json(body);
    //             res.end();
    //         })
    //     }
    // });

});

router.get('/importtasks/:household/:assignusers?', function (req, res, next) {

    let assignUsers = 7;
    if (req.params.term !== undefined) assignUsers = parseB(req.params.assignusers.toLowerCase() === "true");
    let household = parseInt(req.params.household);
    let json = JSON.parse(fs.readFileSync("./importjson/importJson.json"));
    let response = [];

    for(var item of json.all){
        let arr = [];
        arr.push(item.name);
        arr.push(item.description);
        arr.push(item.period);
        arr.push(item.points);
        response.push(arr);
    }
    //console.log(response);
    response.sort(function(a,b){
        if(a[2] < b[2])
            return -1;
        if(a[2] > b[2])
            return 1;

        return 0;
    });

    //console.log(response);
    let result = [];
    let period = response[0][2];
    let periodArr = [];
    periodArr.push(period);
    result.push(periodArr);
    User.getUsersByHouseholdID(household, null, function (obj, rows) {
        if(rows === 0){
            res.status(500).message("no users in household");
            res.end();
        }else{
            users = rows;
        }
    });
    let assignedUserPos = 0;
    for(let item of response){
        if(item[2] !== period){
            period = item[2];
            periodArr.push(period);
            result.push(periodArr);
        }

        periodArr.push(period);
        result.push(periodArr);
    }

    response = [];
    for(let periodGroup of result){

    }

    res.json({body: response});
    res.end();

});

//af: steven
//controle door:
router.post('/addtasks', function (req, res, next) {
    process.on("mysqlError", (err) => {
        return next(err);
    });
    let body = req.body;
    let arrayToSend = [];
    for (let i = 0; i < body.length; i++) {
        let arr = [];
        arr.push(body[i].description);
        arr.push(body[i].household_id);
        arr.push(body[i].period);
        arr.push(body[i].points);
        arr.push(body[i].name);
        arr.push(body[i].dueDate);
        arr.push(body[i].assigned_to);
        arrayToSend.push(arr);
    }

    console.log(arrayToSend);

    Task.addTasks(arrayToSend, function (body) {
        console.log("tasks added");
        res.json(body);
        res.end();
    })
});
// router.use(apiNotFound);
// router.use(apiErrorHandling);

module.exports = router;
