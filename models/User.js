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

    static addUser(firebaseUser, cb) {

        let user = {};

        user.name = firebaseUser.name;
        user.email = firebaseUser.email;
        user.uid = firebaseUser.uid;
        user.imgsrc = firebaseUser.picture;

        conn.query("insert into `users` (name, email, uid, imgsrc) values (?,?,?,?)", [user.name, user.email, user.uid, user.picture],
            function (err, rows, fields) {

                if (err && !err.message.startsWith("ER_DUP_ENTRY:")) {
                    process.emit("mysqlError", err);
                }

                else {
                    cb(user);
                }

            })
    }
}

module.exports = User;
