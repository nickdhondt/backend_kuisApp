/**
 * Created by Bart on 31/12/2016.
 */

let mysql = require('mysql');
let conn = require('../helpers/connection')(mysql);
let moment = require("moment");

let Award = require("../models/Award");
let User = require("../models/User");
let Household = require("../models/Household");
let Task = require("../models/Task");

let FinishedTask = require('../Mongo/MongoDB_Models/finishedtask.model');
let FinishedAward = require('../Mongo/MongoDB_Models/finishedaward.model');

class getUser {

    static getUserByUIDBart(uid, cb) {

        conn.query("select * from `users` where `uid` = ? limit 1", [uid], function (err, rows, fields) {

            if (err) process.emit("mysqlError", err);

            else {

                if (rows[0] && rows[0].household_id)
                    getUser.addHouseholdToUser(rows[0], cb);
                else
                    cb(rows[0]);
            }
        })
    }

    static getAwardStatsFromMongo(household, cb){

        FinishedAward.aggregate([

            {$match: {household_id: household.id}},
            {$sort: {"month": -1}},
            {
                $group: {
                    _id: '$winner_id',
                    count: {$sum: 1},
                    last: {$first: '$name'},
                    max : {$first: '$month'},
                    users: {$first: '$users'},
                }
            },
            {$sort: {"max": -1}},

        ]).exec((err, stats)=>{

            if (err) console.log(err);//process.emit("mysqlError", err);
            else {

                let mostAwards;
                let max = 0;
                let total = 0;
                stats.map(s=>{
                    total+=s.count;
                    if(s.count > max ){
                        mostAwards = s;
                        max = s.count;
                    }
                });

                let result = {};
                result.mostAwardsWon = mostAwards._id || "it's mostly a draw";
                result.countFinishedAwards = total;
                result.lastAward = stats[0].last;
                result.lastAwardWonBy = stats[0]._id || getUser.findwinners(stats[0].users, household.users);

                cb(result);
            }
        });
    }

    static findwinners(users, householdusers){

        let max = 0;
        let winners = [];

        Object.keys(users).map(k=>{

            let user = householdusers.filter((u)=>{
                if(u.id == k) return true;
            });

            if(!user[0]) user = "an old user";
            else user = user[0].name;

            if(users[k] == max)
                winners.push(user);
            else if(users[k] > max){
                winners = [];
                winners.push(user);
                max = users[k];
            }
        });

    let res = "It was a draw between: ";

    for(let i=0; i<winners.length; i++) {
        res += winners[i];
        if (i < winners.length - 2) res += ", ";
        else if (i == winners.length -2) res += " and ";
    }

    return res;
};

    static getTaskStatsFromMongo(household_id, cb) {

        FinishedTask
            .aggregate([
                {$match: {household_id: household_id, done: true}},
                {
                    $group: {
                        _id: '$id',
                        TotalScore: {$sum: "$points"},
                        count: {$sum: 1},
                        name: {$first: "$name"}
                    }
                },
                {$sort: {"count": -1}},
                {
                    $group: {
                        _id: "stats",
                        mostPopularTask: {$first: "$name"},
                        countFinishedTasks: {$sum: "$count"},
                        countTotalScore: {$sum: "$TotalScore"}
                    }
                }
            ])
            .exec(function (err, stats) {
                if (err)process.emit("mysqlError", err);

                else cb(stats[0]);
            });

    }

    static addHouseholdToUser(user, cb) {
        conn.query("select * from `households` where `id` = ? limit 1", [user.household_id],
            function (err, rows, fields) {

                if (err) process.emit("mysqlError", err);

                else {

                    getUser.getTaskStatsFromMongo(rows[0].id, (statsTasks) => {

                            user.household = Object.assign(rows[0], statsTasks);

                            getUser.addUsersToHouseholdToUser(user, cb);

                    });
                }

            })
    }

    static addUsersToHouseholdToUser(userwithhousehold, cb) {

        conn.query("select * from `users` where `household_id` = ? order by `id` asc", [userwithhousehold.household.id],
            function (err, rows, fields) {
                if (err) process.emit("mysqlError", err);
                else {

                    userwithhousehold.household.users = rows;

                    getUser.getAwardStatsFromMongo(userwithhousehold.household, (stats)=>{

                        userwithhousehold.household = Object.assign(userwithhousehold.household, stats);

                        getUser.addTasksToHouseholdToUser(userwithhousehold, cb);
                    });

                }
            })
    }


    static addTasksToHouseholdToUser(userwithhousehold, cb) {

        conn.query("select * from `tasks` where `household_id` = ?", [userwithhousehold.household.id],
            function (err, rows, fields) {
                if (err) process.emit("mysqlError", err);
                else {
                    userwithhousehold.household.tasks = rows;
                    getUser.addTasksTodoToHouseholdToUser(userwithhousehold, cb);

                }
            })


    }


    static addTasksTodoToHouseholdToUser(userwithhousehold, cb, term) {

        term = term || 7;

        let dueDate = new moment().add(term, "days").format("YYYY-MM-DD");

        conn.query("select * from `tasks` where `household_id` = ? and `dueDate` <= ?",
            [userwithhousehold.household.id, dueDate],
            function (err, rows, fields) {
                if (err) process.emit("mysqlError", err);
                else {

                    userwithhousehold.household.taskstodo = rows;
                    getUser.addAwardToHouseholdToUser(userwithhousehold, cb);

                }
            })

    }


    static addAwardToHouseholdToUser(userwithhousehold, cb) {

        conn.query("select * from `awards` where `household_id` = ? limit 1", [userwithhousehold.household.id],
            function (err, rows, fields) {
                if (err) process.emit("mysqlError", err);
                else {

                    let award = rows[0];

                    if (award) {

                        let awardTerm = "months"; // Change to "months" for production

                        let awardDate = moment(award.month, "YYYY-MM-DD");
                        let now = moment().subtract(1, awardTerm);

                        if (awardDate.isBefore(now)) {

                            Award.saveAwardToMongo(userwithhousehold.household, award);

                            Award.deleteAwardByHouseholdID(userwithhousehold.household.id);

                            Household.resetScores(userwithhousehold.household, () => {
                            });

                            award = null;
                        }

                    }
                    else {
                        award = null;
                    }

                    userwithhousehold.household.award = award;

                    cb(userwithhousehold);

                }
            });

    }


}

module.exports = getUser;


