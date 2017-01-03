let express = require('express');
let router = express.Router();

let bodyParser = require('body-parser');

let fs = require('fs');
let mysql = require('mysql');
let conn = require('../helpers/connection')(mysql);

let firebaseAuthenticator = require("../middleware/firebase-authenticator");
let checkTaskFormat = require("../middleware/checkTaskFormat");
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

router.get('/contributionsbyhousehold', firebaseAuthenticator, function (req, res, next) {

    process.on("mysqlError", (err) => {
        return next(err);
    });

    Household.getHouseholdLimitedByUID(res.locals.uid, (household) => {

        Task.getContributions(household.id, (data) => {

            res.json(data);
            res.end();

        })

    });

});

router.get('/contributionevolutionbyhousehold', firebaseAuthenticator, function (req, res, next) {
    process.on("mysqlError", (err) => {
        return next(err);
    });

    Household.getHouseholdLimitedByUID(res.locals.uid, (household) => {

        Task.getContributionEvolution(household.id, (data) => {

            res.json(data);
            res.end();

        })

    });
});

router.get('/taskstatsbyhousehold', firebaseAuthenticator, function (req, res, next) {

    process.on("mysqlError", (err) => {
        return next(err);
    });

    Household.getHouseholdLimitedByUID(res.locals.uid, (household) => {

        Task.getTaskStats(household.id, (data) => {

            res.json(data);
            res.end();

        })

    });
});

router.get('/finishedcanceledstats', function (req, res, next) {

    process.on("mysqlError", (err) => {
        return next(err);
    });

    Household.getHouseholdLimitedByUID(res.locals.uid, (household) => {

    Task.getFinishedCanceld(37, (data)=>{

        res.json(data);
        res.end();

    })
    })
});

router.get('/householdstats', function (req, res, next) {


    FinishedTask
        .aggregate([
            {$match: {household_id: 37}},
            {
                $group: {
                    _id: {
                        "year": {$year: "$finished_on"},
                        "month": {$month: '$finished_on'},

                        "done": "$done"
                    },
                    count: {$sum: 1},
                }
            },
            {$sort: {"_id.year":-1, "_id.month": -1}},
        ])
        .exec(function (err, tasks) {
            if (err) next(err);

            res.json(tasks);
            res.end();
        })

});

router.get('/userlimited', firebaseAuthenticator, function (req, res, next) {

    process.on("mysqlError", (err) => {
        return next(err);
    });

    User.getUserByUID(res.locals.uid, (user) => {
        res.json(user);
        res.end();
    });

    //changes, so many changes
});

router.get('/userbyuid/:fbUser', firebaseAuthenticator, function (req, res, next) {

    //do not remove! req.params nodig voor redirect
    let uid = res.locals.uid || req.params.fbUser;

    console.log(uid);

    process.on("mysqlError", (err) => {
        return next(err);
    });

    repo.getUserByUIDBart(uid, (user) => {

        res.json(user);
        res.end();

    });

    // User.getUserByUID(fbUser, function (fbUser) {
    //
    //     if (fbUser !== undefined && fbUser.household_id !== null) {
    //         Household.getHouseholdByID(fbUser.household_id, fbUser, (fbUser, household) => {
    //             fbUser.household = household;
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
    //             fbUser.household = Object.assign(fbUser.household, statsTasks, statsAwards);
    //
    //             Task.getTasksByHouseholdID(household.id, fbUser, (fbUser, tasks) => {
    //                 fbUser.household.tasks = tasks;
    //                 User.getUsersByHouseholdID(fbUser.household_id, fbUser, (fbUser, users) => {
    //                     fbUser.household.users = users;
    //                     Task.getTasksTodoByHouseholdID(fbUser.household_id, 7, fbUser, (fbUser, tasksTodo) => {
    //                         fbUser.household.taskstodo = tasksTodo;
    //                         Award.getAwardByHouseholdID(fbUser.household_id, fbUser, (fbUser, award) => {
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
    //                                     Award.deleteAwardByHouseholdID(fbUser.household.id);
    //
    //                                     Household.resetScores(household);
    //
    //                                     award = null;
    //                                 }
    //
    //                                 fbUser.household.award = award;
    //
    //                                 res.json(fbUser);
    //                                 res.end();
    //                             } else {
    //                                 fbUser.household.award = null;
    //                                 res.json(fbUser);
    //                                 res.end();
    //                             }
    //                         })
    //                     })
    //                 });
    //             })
    //         })
    //     } else {
    //         res.json(fbUser);
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
router.post('/updateuser', firebaseAuthenticator, function (req, res, next) {
    process.on("mysqlError", (err) => {
        return next(err);
    });


    let body = req.body;

    User.getUserByUID(res.locals.uid, function (user) {
        body.id = user.id;
        body.uid = user.uid;
        body.score = user.score;

        User.updateUser(body, function (user) {
            res.json(body);
            res.end();
        })
    });
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

        // //moet zo, kan headers niet instellen bij redirect
        // res.redirect('/api/userbyuid/' + uid);

        repo.getUserByUIDBart(uid, (user) => {


            res.json(user);
            res.end();

        });
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

        repo.getUserByUIDBart(res.locals.uid, (user) => {

            res.json(user);
            res.end();

        });

         // res.redirect('/api/userbyuid/' + res.locals.uid);
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
//controle door: Bart & Nick
router.post('/addtask', firebaseAuthenticator, function (req, res, next) {
    process.on("mysqlError", (err) => {
        return next(err);
    });
    let body = req.body;
    User.getUserByUID(res.locals.uid, function (user) {
        body.household_id = user.household_id;
        if(body.dueDate === null || body.household_id == null){
            return next(new Error("Not a valid task"))
        }else{
            Task.addTask(body, function (body) {
                res.json(body);
                res.end();
            })
        }
    });
});

//af: steven
//controle door: Bart & Nick
router.post('/updatetask', firebaseAuthenticator, function (req, res, next) {
    process.on("mysqlError", (err) => {
        return next(err);
    });
    let body = req.body;
    User.getUserByUID(res.locals.uid, function (user) {
        body.household_id = user.household_id;
        Task.updateTask(body, function (body) {
            res.json(body);
            res.end();
        })
    })
});

router.post('/finishtask', [firebaseAuthenticator, checkTaskFormat], function (req, res, next) {
    process.on("mysqlError", (err) => {
        return next(err);
    });

    let receivedTask = req.task;

    User.getUserByUID(res.locals.uid, function (user) {

        if (!user) return next(new Error("fbUser not found"));

        Task.getTaskByID(receivedTask.id, function (originalTask) {

            let points = (receivedTask.done ? originalTask.points : 0 );

            let finishedTask = FinishedTask({
                id: originalTask.id,
                name: originalTask.name,
                dueDate: originalTask.dueDate,
                description: originalTask.description,
                period: originalTask.period,
                household_id: originalTask.household_id,
                assigned_to: originalTask.assigned_to,
                points: points,
                done: receivedTask.done,
                finished_by: user.id,
                finished_on: receivedTask.finished_on
            });

            finishedTask.save(function (err) {
                if (err) return next(err);

                //checked
                if (receivedTask.done) {
                    user.score += originalTask.points;
                    User.updateUser(user, () => {
                    });
                }

                //checked
                let nextDue = moment(originalTask.dueDate).add(originalTask.period, "day");

                while (nextDue.isBefore(moment())) {

                    nextDue = moment(nextDue).add(originalTask.period, "day");

                    new FinishedTask({
                        id: originalTask.id,
                        name: originalTask.name,
                        dueDate: nextDue,
                        description: originalTask.description,
                        period: originalTask.period,
                        household_id: originalTask.household_id,
                        assigned_to: originalTask.assigned_to,
                        points: points,
                        done: false,
                        finished_by: null,
                        finished_on: receivedTask.finished_on
                    }).save(function (err) {
                    });
                }

                originalTask.dueDate = nextDue.format("YYYY-MM-DD");

                //checked
                if (originalTask.assigned_to != null) {

                    User.getUsersByHouseholdID(originalTask.household_id, null, function (obj, users) {

                        let newUser = -1;
                        for (let user of users) {
                            if (user.id > originalTask.assigned_to) {
                                newUser = user.id;
                                break;
                            }
                        }

                        if (newUser === -1) newUser = users[0].id;

                        originalTask.assigned_to = newUser;

                        Task.updateTask(originalTask, function () {

                            let finishedTaskData = {
                                taskID: receivedTask.id,
                                userID: user.id,
                                householdID: originalTask.household_id,
                                done: receivedTask.done
                            };
                            process.emit("task-finished", finishedTaskData);

                            res.json(originalTask);
                            res.end();
                        });
                    });
                }
                else {
                    Task.updateTask(originalTask, function () {

                        let finishedTaskData = {
                            taskID: receivedTask.id,
                            userID: user.id,
                            householdID: receivedTask.household_id,
                            done: receivedTask.done
                        };
                        process.emit("task-finished", finishedTaskData);

                        res.json(originalTask);
                        res.end();
                    })
                }
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
    process.on("mysqlError", (err) => {
        return next(err);
    });
    let body = req.body;


    User.getUserByUID(res.locals.uid, function (user) {
        body.creator_id = user.id;
        body.household_id = user.household_id;
        Award.countAwardsFromHousehold(user.household_id, function (rows) {

            if (rows[0].awardsCount > 0) {
                //update van de bestaande award
                Award.updateAwardFromHousehold(body, function (body) {
                    res.json(body);
                    res.end();
                })
            } else {
                //nieuwe award voor huishouden invoegen
                Award.addAward(body, function (body) {
                    res.json(body);
                    res.end()
                })
            }
        });
    });
});

router.get('/importtasks/:household/:assignusers?',  function (req, res, next) {

    //let assignUsers = 7;
    //if (req.params.term !== undefined) assignUsers = parseB(req.params.assignusers.toLowerCase() === "true");

    let assignUsers = req.params.assignusers ? true : false;

    User.getUsersFromHouseholdbyUID("yNk23UJPeQRsCdLvYQKKHonIzFa2", (users) => {


        let json = require('../importjson/importJson.json');

        let result = [];

        let tasklist = [];

        Object.keys(json).map(room=>{
            tasklist = tasklist.concat(json[room]);
        });

        tasklist = tasklist.map((t)=>{
            t.period = parseInt(t.period);
            t.points = parseInt(t.points);

            return t;
        });

        tasklist.sort((a,b)=>{
            if(a.period < b.period) return -1;
            if(a.period > b.period) return 1;
            return 0;
        });

        let periodgroups = [];
        let assignedUserPos = 0;

        tasklist.map(t=>{

            if(!periodgroups[t.period])
                periodgroups[t.period] = [];

            periodgroups[t.period].push(t);

        });

        Object.keys(periodgroups).map(key=>{

            let number = periodgroups[key].length;
            let assignedDate = moment();
            let days = Math.round(key/number);

            if(days === 0) days = 1;

            periodgroups[key].map(t=>{

                assignedDate = assignedDate.add(days, 'days');
                t.dueDate = assignedDate.format('YYYY-MM-DD');
                t.household_id = users[0].household_id;

                if(!assignUsers){
                    t.assigned_to = users[assignedUserPos].id;
                    assignedUserPos++;
                    if(assignedUserPos == users.length)
                        assignedUserPos = 0;
                }
                result.push(t);
            });
        });

        res.json(result);
        res.end();

    });
    // let household = parseInt(req.params.household);
    // let json = JSON.parse(fs.readFileSync("./importjson/importJson.json"));
    // let response = [];
    //
    // for(var item of json.all){
    //     let arr = [];
    //     arr.push(item.name);
    //     arr.push(item.description);
    //     arr.push(item.period);
    //     arr.push(item.points);
    //     response.push(arr);
    // }
    // //console.log(response);
    // response.sort(function(a,b){
    //     if(a[2] < b[2])
    //         return -1;
    //     if(a[2] > b[2])
    //         return 1;
    //
    //     return 0;
    // });
    //
    // //console.log(response);
    // let result = [];
    // let period = response[0][2];
    // result.push({
    //     per: period,
    //     arr: []
    // });
    // User.getUsersByHouseholdID(household, null, function (obj, users) {
    //     let usersFromHousehld = [];
    //     for(let user of users){
    //         usersFromHousehld.push(user.id);
    //     }
    //
    //     let assignedUserPos = 0;
    //     for(let item of response) {
    //         if (item[2] !== period) {
    //             period = item[2];
    //             result.push({
    //                 per: period,
    //                 arr: []
    //             });
    //         }
    //         if(result[0].per === period){
    //             result[0].arr.push(item);
    //         }else{
    //             if(result[1].per === period){
    //                 result[1].arr.push(item);
    //             }else{
    //                 result[2].arr.push(item);
    //             }
    //         }
    //     }
    //
    //     //console.log(result);
    //     response = [];
    //     for(let periodGroup of result){
    //         //console.log(periodGroup.arr[0]);
    //         let number = periodGroup.arr.length;
    //         let period = periodGroup.arr[0][2];
    //         let assignedDate = new Date();
    //         let days = Math.round(period/number);
    //         if(days === 0) days = 1;
    //
    //         for(let item of periodGroup.arr){
    //             assignedDate.setDate(assignedDate.getDate() + days);
    //             item.push(assignedDate.toISOString().split('T')[0]);
    //             item.push(household);
    //             if(assignUsers === 7){
    //                 item.push(usersFromHousehld[assignedUserPos]);
    //                 assignedUserPos++;
    //                 if(assignedUserPos === users.length){
    //                     assignedUserPos = 0;
    //                 }
    //             }
    //             json = {};
    //             json['name'] = item[0];
    //             json['description'] = item[1];
    //             json['period'] = item[2];
    //             json['points'] = item[3];
    //             json['dueDate'] = item[4];
    //             json['household_id'] = item[5];
    //             json['assigned_to'] = item[6];
    //
    //             response.push(json);
    //         }
    //     }
    //     res.json({body: response});
    //     res.end();
    // });
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
