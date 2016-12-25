let mysql = require('mysql');
let conn = require('../helpers/connection')(mysql);

class Award {
  static getAwardByHouseholdID(id, user, cb) {
    conn.query("select * from `awards` where `household_id` = ? limit 1", [id],
      function (err, rows, fields) {
        if (err) process.emit("mysqlError", err);
        else cb(user, rows[0]);
      });
  }

  static deleteAwardByHouseholdID(id) {
    conn.query("delete from `awards` where `household_id` = ? limit 1", [id],
      function (err, result) {
        if (err) process.emit("mysqlError", err);
      });
  }

  static addAward(body,cb){
      //body in array stoppen
      conn.query("insert into awards values ?", post, function (err,res) {
          if(err) process.emit("mysqlError", err);
          else cb(body);
      })
  }
}

module.exports = Award;
