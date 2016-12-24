let mysql = require('mysql');
let conn = require('../helpers/connection')(mysql);
let moment = require('moment');

class Task {
  static getTasksByHouseholdID(id, user, cb) {
    conn.query("select * from `tasks` where `household_id` = ?", [id],
      function (err, rows, fields) {
        if (err) process.emit("mysqlError", err);
        else cb(user, rows);
      })
  }

  static getTasksTodoByHouseholdID(id, user, cb) {
    let dueDate = new moment().add(7, "days").format("YYYY-MM-DD");

    conn.query("select * from `tasks` where `household_id` = ? and `dueDate` <= ?", [id, dueDate],
      function (err, rows, fields) {
        if (err) process.emit("mysqlError", err);
        else cb(user, rows);
      })
  }

  static deleteTask(id, cb) {
    conn.query("delete from `tasks` " +
      "where id = ?", [id],
      function (err, result) {
        if (err) return next(err);
        cb(result.rowsAffected);
      });
  }
}

module.exports = Task;
