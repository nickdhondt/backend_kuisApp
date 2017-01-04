let mysql = require('mysql');
let conn = require('../helpers/connection')(mysql);

let User = require("./User");
let Task = require("./Task");
let Household = require("./Household");

let FinishedAward = require('../Mongo/MongoDB_Models/finishedaward.model');


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
      let post = [
          body.description,
          body.name,
          body.month,
          body.winner_id,
          body.creator_id,
          body.household_id
      ];
      conn.query("insert into awards (`description`, `name`, `month`, `winner_id`, `creator_id`, `household_id`) values (?,?,?,?,?,?)", post, function (err,res) {
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

    static saveAwardToMongo(household, award) {

      let maxScore = 0;
      let winner = null;
      let scores = {};

      household.users.map(u=>{

          scores[u.id] = u.score;

          if(u.score == maxScore)
              winner = null;
          else if(u.score > maxScore){
              winner = u.id;
              maxScore = u.score;
          }
      });

        let newFinishedAward = FinishedAward({
            id: award.id,
            name: award.name,
            description: award.description,
            month: award.month,
            winner_id: winner,
            household_id: award.household_id,
            users: scores,
            creator_id: award.creator_id
        });

        newFinishedAward.save(function (err) {
            if (err) console.log(err);
        })
    };
}

module.exports = Award;
