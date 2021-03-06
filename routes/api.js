let express = require('express');
let router = express.Router();

let bodyParser = require('body-parser');

let fs = require('fs');
let path = require('path');
let mysql = require('mysql');
let conn = require('../helpers/connection')(mysql);

let firebaseAuthenticator = require("../middleware/firebase-authenticator");
let checkTaskFormat = require("../middleware/checkTaskFormat");
let checkFinishedTaskFormat = require("../middleware/checkFinishedTaskFormat");
let apiNotFound = require("../middleware/api-not-found");
let apiErrorHandling = require("../middleware/api-error-handling");


let User = require("../models/User");
let Household = require("../models/Household");
let Award = require("../models/Award");
let Task = require("../models/Task");

let repo = require("../repo/repo");
let getUserPromises = require("../repo/promisesrepo");

let moment = require("moment");
let FinishedTask = require('../Mongo/MongoDB_Models/finishedtask.model');
let FinishedAward = require('../Mongo/MongoDB_Models/finishedaward.model');
let Announcement = require('../Mongo/MongoDB_Models/announcement.model');
let Promise = require('promise');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Firebase-ID-Token");
    next();
});

router.get('/', function (req, res) {
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

router.get('/finishedcanceledstats', firebaseAuthenticator, function (req, res, next) {

    process.on("mysqlError", (err) => {
        return next(err);
    });

    Household.getHouseholdLimitedByUID(res.locals.uid, (household) => {

    Task.getFinishedCanceld(household.id, (data)=>{

        res.json(data);
        res.end();

    })
    })
});

// router.get('/seedmongoawards',function (req, res, next) {
//
//     let household_id = 148;
//     let creators = [251,252,253,254];
//     let awards = [
//         {id:1 ,name:"Geen afwas voor een week", description:""},
//         {id:2 ,name:"We trakteren met een film", description:""},
//         {id:3 ,name:"Controle over de tv", description:"Voor 3 dagen"},
//         {id:4 ,name:"Keuze van radiopost", description:"Voor de volledige maand!"},
//         {id:5 ,name:"Een (niet) sensuele voetmassage", description:""},
//         {id:6 ,name:"Drie gestreken hemden", description:"We strijken drie hemden voor jou!"},
//         {id:7 ,name:"Een lekkere Ename!", description:""},
//         {id:8 ,name:"Extra douchetijd 's morgens", description:"Een kwartier langer in de badkamer voor één week!"},
//         {id:9 ,name: "Een pak batterijen",description:"Voor in de dildo."},
//         {id:10 ,name: "Een maand gratis Bureaucontainers",description:""},
//         {id:12 ,name: "Drie wildcards",description:"Als je geen zin hebt om boodschappen te doen"},
//         {id:13 ,name: "Een groene koffietas over tuinieren",description:""},
//         {id:14 ,name: "Een jezusbeeldje",description:"Omdat het kan"},
//         {id:15 ,name: "Star Wars in concert on blu-ray",description:"Of dvd"}
//         ];
//
//
//     let index = 0;
//     let begin = moment().subtract(14, 'months');
//
//     while(begin < moment().subtract(1, 'months')){
//
//         begin = begin.add(1,'months');
//         index++;
//
//         let award = awards[index];
//
//
//         let users={};
//
//         creators.map(c=>{
//             users[c] =   Math.floor(Math.random() * (100));
//         });
//
//         let newFinishedAward = FinishedAward({
//             id: award.id,
//             name: award.name,
//             description: award.description,
//             month: begin.format("YYYY-MM-DD"),
//             winner_id: creators[ Math.floor(Math.random() * (creators.length))],
//             household_id: household_id,
//             users: users,
//             creator_id: creators[ Math.floor(Math.random() * (creators.length))]
//         });
//
//         newFinishedAward.save(function (err) {
//             if (err) console.log(err);
//             else console.log("saved :" + index);
//         })
//     }
//
//     res.send();
//     res.end();
//
// });

// router.get('/seedfinishedtasks', (req, res, next)=>{
//
//     let users = [251,252,253,254];
//
//     let count = [];
//
//     Task.getTasksUID("yNk23UJPeQRsCdLvYQKKHonIzFa2", tasks=>{
//
//         tasks.map(t=>{
//
//             let lastyear = moment(t.dueDate).subtract(12,'months');
//
//             let userPos = 0;
//
//             let sum = 0;
//
//             while(lastyear < moment()){
//
//                 let finishedTask = FinishedTask({
//                     id: t.id,
//                     name: t.name,
//                     dueDate: lastyear.format("YYYY-MM-DD"),
//                     description: t.description,
//                     period: t.period,
//                     household_id: t.household_id,
//                     assigned_to: users[userPos],
//                     points: t.points,
//                     done: true,
//                     finished_by: users[userPos],
//                     finished_on: lastyear.format("YYYY-MM-DD")
//                 });
//
//                 finishedTask.save(err=>{});
//
//                 userPos++;
//                 if(userPos>=users.length) userPos = 0;
//
//                 lastyear.add(t.period,'days');
//
//                 sum++
//             }
//
//             count.push({name:t.name, sum:sum})
//
//         });
//
//         res.json(count);
//         res.end();
//     });
//
// });

router.get('/userlimited', firebaseAuthenticator, function (req, res, next) {

    process.on("mysqlError", (err) => {
        return next(err);
    });

    User.getUserByUID(res.locals.uid, (user) => {
        res.json(user);
        res.end();
    });


});

//testje om promises te oefenen
//bart yNk23UJPeQRsCdLvYQKKHonIzFa2
router.get('/userbyuid/:fbUser', firebaseAuthenticator, function (req, res, next) {

    let start = Date.now();

    getUserPromises.getUserByUID(res.locals.firebaseUser)
        .then(user=>{
            if(user.household_id){
                return getUserPromises.addHouseholdToUser(user)
                    .then(getUserPromises.addUsers)
                    .then(getUserPromises.addTasks)
                    .then(getUserPromises.addTasksTodo)
                    .then(getUserPromises.addAward)
                    .then(getUserPromises.getTaskstatsFromMongo)
                    .then(getUserPromises.getAwardstatsFromMongo)
            }
            else return user;
    }).then(user=>{
        res.json(user);
        res.end();
    }).catch(err=>{
        next(err)
    });
});


//geen paniek: hier is de oude
router.get('/userbyuidOLD/:fbUser', firebaseAuthenticator, function (req, res, next) {


    //do not remove! req.params nodig voor redirect
    let uid = res.locals.uid || req.params.fbUser;

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
router.post('/addtask',[checkTaskFormat, firebaseAuthenticator], function (req, res, next) {
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
router.post('/updatetask', [checkTaskFormat, firebaseAuthenticator] , function (req, res, next) {

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

router.post('/finishtask', [firebaseAuthenticator, checkFinishedTaskFormat], function (req, res, next) {


    process.on("mysqlError", (err) => {
        return next(err);
    });

    let receivedTask = req.task;

    User.getUserByUID(res.locals.uid, function (user) {

        if (!user) return next(new Error("fbUser not found"));

        Task.getTaskByID(receivedTask.id, function (originalTask) {

            if(receivedTask.dueDate && moment(receivedTask.dueDate).format("YYYY-MM-DD") !== moment(originalTask.dueDate).format("YYYY-MM-DD")){
                return next(new Error("task already finished"))
            }

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

            //console.log(typeof finishedTask.finished_on + finishedTask.finished_on);

            finishedTask.save(function (err) {
                if (err) {
                    //console.log(err);
                    return next(err);
                }

                // checked
                if (receivedTask.done) {
                    user.score += originalTask.points;
                    User.updateUser(user, () => {
                    });
                }

                //checked
                let nextDue = moment(originalTask.dueDate).add(originalTask.period, "day");

                while (nextDue.isBefore(moment().subtract(1,"day"))) {

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

                // checked
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
                                done: receivedTask.done,
                                name: user.name,
                                lname: user.lname,
                                taskName: originalTask.name
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
                            householdID: originalTask.household_id,
                            done: receivedTask.done,
                            name: user.name,
                            lname: user.lname,
                            taskName: originalTask.name
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

router.get('/importtasks/:household/:assignusers?',  firebaseAuthenticator, function (req, res, next) {

    //let assignUsers = 7;
    //if (req.params.term !== undefined) assignUsers = parseB(req.params.assignusers.toLowerCase() === "true");

    process.on("mysqlError", (err) => {
        return next(err);
    });

    let assignUsers = req.params.assignusers ? true : false;

    User.getUsersFromHouseholdbyUID(res.locals.uid, (users) => {

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

                if(assignUsers){
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
//controle door: bart the almighty (en nee, het werkte niet)
router.post('/addtasks', firebaseAuthenticator,  function (req, res, next) {


    process.on("mysqlError", (err) => {
        return next(err);
    });

    let body = req.body;

    Household.getHouseholdLimitedByUID(res.locals.uid, household=>{

    let arrayToSend = [];

    body.map(t=>{

        let arr = [];
        arr.push(t.description);
        arr.push(t.household_id);
        arr.push(t.period);
        arr.push(t.points);
        arr.push(t.name);
        arr.push(t.dueDate);
        arr.push(t.assigned_to);

        arrayToSend.push(arr);

    });

    Task.addTasks(arrayToSend, function (firstID) {

        //console.log(firstID);

        Task.getImportedTasks(household.id, firstID, (tasks)=>{

            res.json(tasks);
            res.end();
        });
    })

    });
});

router.get('/lastannouncements', firebaseAuthenticator, function (req, res, next) {
    User.getUserByUID(res.locals.uid, function (user) {
        Announcement.find({'household_id': user.household_id}).sort({_id:-1}).limit(30).exec(function(err, posts){
            res.json(posts.reverse());
            res.end();
        });
    })
});
// router.use(apiNotFound);
// router.use(apiErrorHandling);

module.exports = router;
