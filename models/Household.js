let mysql = require('mysql');
let conn = require('../helpers/connection')(mysql);

class Household {
  static getHouseholdByID(id, user, cb) {
    conn.query("select * from `households` where `id` = ? limit 1", [id],
      function (err, rows, fields) {
        if (err) process.emit("mysqlError", err);
        else cb(user, rows[0]);
      })
  }
}

module.exports = Household;
