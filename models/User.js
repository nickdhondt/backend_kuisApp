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

  static getUsersByHouseholdID(id, obj, cb) {
    conn.query("select * from `users` where `household_id` = ?", [id],
      function (err, rows, fields) {
        if (err) process.emit("mysqlError", err);
        else cb(obj, rows);
      })

  }

  static updateUser(user, cb){
      let post = [
          user.email,
          user.household_id,
          user.imgsrc,
          user.lname,
          user.phonenumber,
          user.score,
          user.uid,
          user.name,
          user.id
      ];
      conn.query("update `users` set `email` = ?, `household_id` = ?, `imgsrc` = ?, `lname` = ?, `phonenumber` = ?, `score` = ?, `uid` = ?, `name` = ? where `id` = ?", post, function (err, res) {
          if(err) process.emit("mysqlError", err);
          else cb(user);
      })
  }
}

module.exports = User;
