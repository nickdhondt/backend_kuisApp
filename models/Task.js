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
        if (err) process.emit("mysqlError", err);
        cb (result.rowsAffected);
      });
  }
  static addTask(body, cb){
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

  static updateTask(body,cb){
      let post = [
          body.id,
          body.description,
          body.household_id,
          body.period,
          body.points,
          body.name,
          body.dueDate,
          body.assigned_to
      ];
      conn.query("update ....", post, function (res,err) {
          if(err) process.emit("mysqlError", err);
          cb(body);
      });
  }
}



module.exports = Task;
