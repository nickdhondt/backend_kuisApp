let mysql = require('mysql');
let conn = require('../helpers/connection')(mysql);
let moment = require('moment');

class Task {

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
        cb (result.rowsAffected);
      });
  }
  static addTask(body, cb){
      var post = [
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
          body.description,
          body.household_id,
          body.period,
          body.points,
          body.name,
          body.dueDate,
          body.assigned_to,
          body.id
      ];
      conn.query("update `tasks` set `description` = ?, `household_id` = ?, period = ?, points = ?, name = ?, dueDate = ?, assigned_to = ? where `id` = ?", post, function (res,err) {
          if(err) process.emit("mysqlError", err);
          cb(body);
      });
  }
}



module.exports = Task;
