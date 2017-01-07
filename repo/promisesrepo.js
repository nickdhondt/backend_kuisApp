/**
 * Created by Bart on 6/01/2017.
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

let mongoose = require('mongoose');

let getUserPromises = (()=> {

    let getUserByUID = (uid) => {

        return new Promise((resolve, reject) => {

            conn.query("select * from `users` where `uid` = ? limit 1", [uid], function (err, rows, fields) {

                if (err) reject(err);
                else resolve(rows[0]);
            })
        });
    };

    let addHouseholdToUser = (user) => {

        return new Promise((resolve, reject) => {

            conn.query("select * from `households` where `id` = ? limit 1", [user.household_id],
                function (err, rows, fields) {

                    if (err) reject(err);
                    else {
                        user.household = rows[0];
                        resolve(user);
                    }
                });
        });
    };

    let getTaskstatsFromMongo = (userwithhousehold) => {

        return new Promise((resolve, reject) => {

            if (mongoose.connection.readyState == 1)
                FinishedTask
                    .aggregate([
                        {$match: {household_id: userwithhousehold.household.id, done: true}},
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

                        if (err) reject(err);
                        else {
                            if (stats[0])
                                Object.assign(userwithhousehold.household, stats[0]);
                            else
                                Object.assign(userwithhousehold.household, {
                                    _id: "stats",
                                    mostPopularTask: "no tasks",
                                    countFinishedTasks: 0,
                                    countTotalScore: 0
                                });
                            resolve(userwithhousehold);
                        }
                    });

            //else reject(new Error("Mongoose not connected"))
            else resolve(userwithhousehold);
        })
    };

    let getAwardstatsFromMongo = (userwithhousehold) => {

        let findwinner = (id, users) => {
            let winner = "an old user";
            users.map(u => {
                if (u.id == id) winner = u.name;
            });
            return winner;
        };

        let findwinners = (users, householdusers) => {

            let max = 0;
            let winners = [];

            Object.keys(users).map(k => {

                let user = householdusers.filter((u) => {
                    if (u.id == k) return true;
                });

                if (!user[0]) user = "an old user";
                else user = user[0].name;

                if (users[k] == max)
                    winners.push(user);
                else if (users[k] > max) {
                    winners = [];
                    winners.push(user);
                    max = users[k];
                }
            });

            let res = "it was a draw between: ";

            for (let i = 0; i < winners.length; i++) {
                res += winners[i];
                if (i < winners.length - 2) res += ", ";
                else if (i == winners.length - 2) res += " and ";
            }

            return res;

        };

        return new Promise((resolve, reject) => {

            if (mongoose.connection.readyState == 1)
                FinishedAward.aggregate([

                    {$match: {household_id: userwithhousehold.household.id}},
                    {$sort: {"month": -1}},
                    {
                        $group: {
                            _id: '$winner_id',
                            count: {$sum: 1},
                            last: {$first: '$name'},
                            max: {$first: '$month'},
                            users: {$first: '$users'},
                        }
                    },
                    {$sort: {"max": -1}},

                ]).exec((err, stats) => {

                    if (err) reject(err);
                    else {
                        if (stats.length > 0) {

                            let mostAwards;
                            let max = 0;
                            let total = 0;
                            stats.map(s => {
                                total += s.count;
                                if (s.count > max) {
                                    mostAwards = s;
                                    max = s.count;
                                }
                            });

                            let wonby = "";
                            if (stats[0]._id) wonby = findwinner(stats[0]._id, userwithhousehold.household.users);
                            else wonby = findwinners(stats[0].users, userwithhousehold.household.users);

                            let result = {};
                            result.mostAwardsWon = mostAwards._id || "it's mostly a draw";
                            result.countFinishedAwards = total;
                            result.lastAward = stats[0].last;
                            result.lastAwardWonBy = wonby;

                            Object.assign(userwithhousehold.household, result);
                        }
                        else {
                            Object.assign(userwithhousehold.household, {
                                mostAwardsWon: "nobody",
                                countFinishedAwards: 0,
                                lastAward: "no awards yet",
                                lastAwardWonBy: "nobody",
                            });
                        }
                        resolve(userwithhousehold)
                    }
                });

            //else reject(new Error("Mongoose not connected"));
            else resolve(userwithhousehold);
        })
    };

    let getUsers = (userwithhousehold)=>{
        return new Promise((resolve, reject) => {

            conn.query("select * from `users` where `household_id` = ? order by `id` asc", [userwithhousehold.household.id],
                function (err, rows, fields) {
                    if (err) reject(err);
                    else {
                        resolve({users:rows});
                    }
                })
        })
    };

    let addUsers = (userwithhousehold) => {

        return new Promise((resolve, reject) => {

            conn.query("select * from `users` where `household_id` = ? order by `id` asc", [userwithhousehold.household.id],
                function (err, rows, fields) {
                    if (err) reject(err);
                    else {
                        userwithhousehold.household.users = rows;
                        resolve(userwithhousehold);
                    }
                })
        })

    };

    let getTasks = (userwithhoushold)=>{

        return new Promise((resolve, reject) => {

            conn.query("select * from `tasks` where `household_id` = ?", [userwithhousehold.household.id],
                function (err, rows, fields) {
                    if (err) reject(err);
                    else {
                        resolve({tasks: rows});
                    }
                })
        });

    };
    let addTasks = (userwithhousehold) => {

        return new Promise((resolve, reject) => {

            conn.query("select * from `tasks` where `household_id` = ?", [userwithhousehold.household.id],
                function (err, rows, fields) {
                    if (err) reject(err);
                    else {
                        userwithhousehold.household.tasks = rows;
                        resolve(userwithhousehold);
                    }
                })
        });
    };

    let getTasksTodo = (userwithhousehold, term)=>{

        return new Promise((resolve, reject) => {

            term = term || 7;

            let dueDate = new moment().add(term, "days").format("YYYY-MM-DD");

            conn.query("select * from `tasks` where `household_id` = ? and `dueDate` <= ?",
                [userwithhousehold.household.id, dueDate],
                function (err, rows, fields) {
                    if (err) reject(err);
                    else {
                        resolve({taskstodo : rows});
                    }
                });
        })


    };
    let addTasksTodo = (userwithhousehold, term) => {

        return new Promise((resolve, reject) => {

            term = term || 7;

            let dueDate = new moment().add(term, "days").format("YYYY-MM-DD");

            conn.query("select * from `tasks` where `household_id` = ? and `dueDate` <= ?",
                [userwithhousehold.household.id, dueDate],
                function (err, rows, fields) {
                    if (err) reject(err);
                    else {
                        userwithhousehold.household.taskstodo = rows;
                        resolve(userwithhousehold);
                    }
                });
        })
    };

    let addAward = (userwithhousehold) => {

        return new Promise((resolve, reject) => {

            conn.query("select * from `awards` where `household_id` = ? limit 1", [userwithhousehold.household.id],
                function (err, rows, fields) {
                    if (err) reject(err);
                    else {

                        let award = rows[0] || null;

                        if (award) {

                            let awardTerm = "months"; // Change to "months" for production

                            let awardDate = moment(award.month, "YYYY-MM-DD");
                            let now = moment().subtract(1, awardTerm);

                            if (awardDate.isBefore(now)) {

                                Award.saveAwardToMongo(userwithhousehold.household, award);

                                Award.deleteAwardByHouseholdID(userwithhousehold.household.id);

                                Household.resetScores(userwithhousehold.household, () => {
                                });

                                userwithhousehold.household.users =
                                    userwithhousehold.household.users.map(u => {
                                        u.score = 0;
                                    });

                                award = null;
                            }
                        }

                        userwithhousehold.household.award = award;
                        resolve(userwithhousehold);

                    }
                });

        });

    };

    return{
        getUsers,
        getTasks,
        getTasksTodo,
        addAward,
        addHouseholdToUser,
        addTasks,
        addTasksTodo,
        addUsers,
        getTaskstatsFromMongo,
        getUserByUID,
        getAwardstatsFromMongo,
    }
})();

module.exports = getUserPromises;