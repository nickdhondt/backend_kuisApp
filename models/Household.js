let mysql = require('mysql');
let conn = require('../helpers/connection')(mysql);
let Award = require("./Award");

class Household {
  static getHouseholdByID(id, obj, cb) {
    conn.query("select * from `households` where `id` = ? limit 1", [id],
      function (err, rows, fields) {
        if (err) process.emit("mysqlError", err);
        else cb(obj, rows[0]);
      })
  }

  static getHouseholdByEmail(email, cb) {
    conn.query("select `households`.* from `households` " +
      "inner join `users` on `users`.`household_id` = `households`.`id`" +
      "where `email` = ? limit 1", [email],
      function (err, rows, fields) {
        if (err) process.emit("mysqlError", err);
        else cb(rows[0]);
      });
  }


    static getHouseholdByUID(uid, cb) {
        conn.query(
            "select `households`.* from `households` " +
            "inner join `users` on `users`.`household_id` = `households`.`id`" +
            "where `uid` = ? limit 1", [uid],
            function (err, rows, fields) {
                if (err) process.emit("mysqlError", err);
                else {
                    Household.getUsersbyHousehold(rows[0], cb);
                }
            });
    }

    static getUsersbyHousehold(household, cb) {
        conn.query(
            "select * from `users` " +
            "where `household_id` = ?", [household.id],
            function (err, rows, fields) {
                if (err) process.emit("mysqlError", err);
                else {
                    household.users = rows;
                    Award.getAwardByHouseholdID(household.id, null, (obj, award) => {
                        household.award = award;
                        cb(household)
                    });
                }
            });
    }




}

module.exports = Household;
