let emitter = new (require('events').EventEmitter)();

let mysql = require('mysql');
let conn = require('../helpers/connection')(mysql);

class User {
  static getUserByUID(uid, cb) {
    conn.query("select * from `users` where `uid` = ? limit 1", [uid],
      function (err, rows, fields) {
        if (err) process.emit("mysqlError", err);
        else cb(rows[0]);
      })
  }

  static getUsersByHouseholdID(id, user, cb) {
    conn.query("select * from `users` where `household_id` = ?", [id],
      function (err, rows, fields) {
        if (err) process.emit("mysqlError", err);
        else cb(user, rows);
      })

  }
}

module.exports = User;
