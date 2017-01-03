let mysql = require('mysql');
let conn = require('../helpers/connection')(mysql);
let moment = require('moment');

let Award = require("./Award");
let User = require("./User");
let Household = require("./Household");

let FinishedTask = require('../Mongo/MongoDB_Models/finishedtask.model');

class Task {

    static getFinishedCanceld(id, cb){

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

                cb(tasks);
            })
    }

    static getContributionEvolution(id, cb) {

        FinishedTask
            .aggregate([
                {$match: {household_id: id, done: true}},

                {
                    $group: {
                        _id: {
                            "year": {$year: "$finished_on"},
                            "month": {$month: '$finished_on'},
                            "by": '$finished_by'
                        },
                        count: {$sum: "$points"}
                        // TotalScore: {$sum: "$points"},
                        // count: {$sum: 1},
                    }
                },
                {$sort: {"_id.month": 1}},
                {
                    $group: {
                        _id: "$_id.year",
                        stats: {$push: {user: "$_id.by", year: "$_id.year", month: "$_id.month", count: "$count"}},

                        // TotalScore: {$sum: "$points"},
                        // count: {$sum: 1},
                    }
                },
                {$sort: {"_id": -1, "stats.user": -1}},
            ])
            .exec(function (err, tasks) {
                if (err) next(err);

                cb(tasks);
            })

    }

    static getTaskStats(id, cb) {
        FinishedTask
            .aggregate([
                {$match: {household_id: id, done: true}},
                {$sort: {"finished_on": -1}},
                {
                    $group: {
                        _id: '$id',
                        name: {$first: "$name"},
                        count: {$sum: 1},
                    }
                },
                // {$sort: {"_id": -1}},
            ])
            .exec(function (err, data) {
                if (err) next(err);

                cb(data);
            })

    }

    static getContributions(id, cb) {


        FinishedTask
            .aggregate([
                {$match: {household_id: id, done: true}},
                {
                    $group: {
                        _id: '$finished_by',
                        TotalScore: {$sum: "$points"},
                        count: {$sum: 1},
                    }
                },
                {$sort: {"_id": -1}},
            ])
            .exec(function (err, data) {
                if (err) next(err);

                cb(data);
            })

    }

    static getTasksUID(id, obj, cb) {

        conn.query("select * from `tasks` where `household_id` = (select `household_id` from `users` where `uid` = ?)", [id],
            function (err, rows, fields) {
                if (err) process.emit("mysqlError", err);
                else cb(obj, rows);
            })
    }

    static getTasksByHouseholdID(id, obj, cb) {
        conn.query("select * from `tasks` where `household_id` = ?", [id],
            function (err, rows, fields) {
                if (err) process.emit("mysqlError", err);
                else cb(obj, rows);
            })
    }

    static getTasksTodoByHouseholdID(id, term, obj, cb) {
        let dueDate = new moment().add(term, "days").format("YYYY-MM-DD");

        conn.query("select * from `tasks` where `household_id` = ? and `dueDate` <= ?", [id, dueDate],
            function (err, rows, fields) {
                if (err) process.emit("mysqlError", err);
                else cb(obj, rows);
            })
    }

    static getTasksTodoByUID(id, term, obj, cb) {
        let dueDate = new moment().add(term, "days").format("YYYY-MM-DD");

        conn.query("select * from `tasks` where `household_id` = (select `household_id` from `users` where `uid` = ?) and `dueDate` <= ?", [id, dueDate],
            function (err, rows, fields) {
                if (err) process.emit("mysqlError", err);
                else cb(obj, rows);
            })
    }

    static deleteTask(id, cb) {
        conn.query("delete from `tasks` " +
            "where id = ?", [id],
            function (err, result) {
                if (err) process.emit("mysqlError", err);
                cb(result.rowsAffected);
            });
    }

    static addTask(body, cb) {
        let post = [
            body.description,
            body.household_id,
            body.period,
            body.points,
            body.name,
            body.dueDate,
            body.assigned_to
        ];
        conn.query("insert into `tasks` (`description`, `household_id`, `period`, `points`, `name`, `dueDate`, `assigned_to`) values (?, ?, ?, ?, ?, ?, ?)", post, function (err, res) {
            if (err) process.emit("mysqlError", err);
            cb(body);
        });
    }

    static updateTask(body, cb) {
        let post = [
            body.description,
            body.household_id,
            body.period,
            body.points,
            body.name,
            body.dueDate,
            body.assigned_to,
            body.id
        ];
        conn.query("update `tasks` set `description` = ?, `household_id` = ?, period = ?, points = ?, name = ?, dueDate = ?, assigned_to = ? where `id` = ?", post, function (err, res) {
            if (err) process.emit("mysqlError", err);
            cb(body);
        });
    }

    static addTasks(post, cb) {
        conn.query("insert into `tasks` (`description`, `household_id`, `period`, `points`, `name`, `dueDate`, `assigned_to`) values (?, ?, ?, ?, ?, ?, ?)", [post], function (err, res) {
            if (err) process.emit("mysqlError", err);
            cb("Tasks added");
        });
    }

    static getTaskByID(id, cb) {
        conn.query("select * from `tasks` where `id` = ?", [id],
            function (err, rows, fields) {
                if (err) process.emit("mysqlError", err);
                else cb(rows[0]);
            })
    }
}


module.exports = Task;
