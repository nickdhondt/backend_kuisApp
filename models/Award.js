let mysql = require('mysql');
let conn = require('../helpers/connection')(mysql);

class Award {
  static getAwardByHouseholdID(id, obj, cb) {
    conn.query("select * from `awards` where `household_id` = ? limit 1", [id],
      function (err, rows, fields) {
        if (err) process.emit("mysqlError", err);
        else cb(obj, rows[0]);
      });
  }

  static deleteAwardByHouseholdID(id) {
    conn.query("delete from `awards` where `household_id` = ? limit 1", [id],
      function (err, result) {
        if (err) process.emit("mysqlError", err);
      });
  }
}

module.exports = Award;
