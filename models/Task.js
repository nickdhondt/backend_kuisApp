let mysql = require('mysql');
let conn = require('../helpers/connection')(mysql);

Date.prototype.addDays = function(days) {
    let dat = new Date(this.valueOf());
    dat.setDate(dat.getDate() + days);
    return dat;
};

class Task{
    static getTasksByHouseholdID(id, user, cb) {
        conn.query("select * from `tasks` where `household_id` = ?", [id],
            function (err, rows, fields) {
                if(err) return next(err);

                cb(user, rows);
            })
    }

    static getTasksTodoByHouseholdID(id, user, cb) {
        let dueDate = new Date().addDays(7);
        let dueDateString = dueDate.getFullYear() + "-" + (dueDate.getMonth() + 1) + "-" + dueDate.getDate();

        conn.query("select * from `tasks` where `household_id` = ? and `dueDate` <= ?", [id, dueDateString],
            function (err, rows, fields) {
                if(err) return next(err);

                cb(user, rows);
            })
    }
}

module.exports = Task;
