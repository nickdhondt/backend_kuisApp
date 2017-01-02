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

    static getTaskStatsFromMongo(household_id, cb) {

        // TODO: haal stats op uit sql
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
                if (err) next(err);

                delete stats[0]._id
                cb(stats[0]);
            });

    }

    static addHouseholdToUser(user, cb) {
        conn.query("select * from `households` where `id` = ? limit 1", [user.household_id],
            function (err, rows, fields) {

                if (err) process.emit("mysqlError", err);

                else {

                    getUser.getTaskStatsFromMongo(rows[0].id, (statsTasks) => {

                        let statsAwards = {
                            countFinishedAwards: 65,
                            mostAwardsWon: "User",
                            lastAward: "Name of award",
                            lastAwardWonBy: "User or collection of users"
                        };

                        user.household = Object.assign(rows[0], statsTasks, statsAwards);

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
                    getUser.addTasksToHouseholdToUser(userwithhousehold, cb);
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

                        let awardTerm = "day"; // Change to "month" for production

                        let awardDate = moment(award.month, "YYYY-MM-DD");
                        let now = moment().subtract(1, awardTerm);

                        if (awardDate.isBefore(now)) {

                            // TODO: verhuis award naar mongo https://github.com/BartDelrue/backend_kuisApp/blob/master/routes/api.php#L65

                            // process.emit("award-winner", winnerID);

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


