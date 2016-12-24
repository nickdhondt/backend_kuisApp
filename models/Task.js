let mysql = require('mysql');
let conn = require('../helpers/connection')(mysql);
let moment = require('moment');

class Task {
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

  static deleteTask(id, cb) {
    conn.query("delete from `tasks` " +
      "where id = ?", [id],
      function (err, result) {
        if (err) process.emit("mysqlError", err);
        cb (result.rowsAffected);
      });
  }
}

module.exports = Task;
