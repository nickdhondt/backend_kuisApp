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

  static addAward(body,cb){
      //body in array stoppen
      conn.query("insert into awards values ?", post, function (err,res) {
          if(err) process.emit("mysqlError", err);
          else cb(body);
      })
  }

  static countAwardsFromHousehold(householdId, cb){
      conn.query("select count(*) as awardsCount from `awards` where household_id = ?", householdId, function (err,rows) {
          if(err) process.emit("mysqlError", err);
          else cb(rows);
      })
  }

  static updateAwardFromHousehold(body, cb){
      let post = [
          body.description,
          body.name,
          body.month,
          body.winner_id,
          body.creator_id,
          body.household_id
      ];
      conn.query("update `awards` set `description` = ?, `name` = ?, `month` = ?, `winner_id` = ?, `creator_id` = ? where `household_id` = ? ", post, function (err,res) {
          if(err) process.emit("mysqlError", err);
          else cb(body);
      })
  }
}

module.exports = Award;
