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
                    if (rows.length == 0) {
                        cb({});
                        //process.emit("mysqlError", new Error("no household found"));
                    }
                    else Household.getUsersbyHousehold(rows[0], cb);
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

    static addHousehold(household, cb) {
        let post = [
            household.name
        ];
        conn.query("insert into `households` (`name`) values (?)", post, function (err, res) {
            if (err) process.emit("mysqlError", err);
            else cb(res.insertId);
        })
    }


    static updateHousehold(household, cb) {
        let post = [
            household.name,
            household.address,
            household.phoneNumber,
            household.id
        ];

        conn.query("update `households` set `name` = ?, `address` = ?, `phoneNumber` = ? where `id` = ?", post, function (err, res) {
            if (err) process.emit("mysqlError", err);
            else cb(res);
        })
    }

    static leaveHousehold(body, cb) {
        let post = [
            body.id
        ];
        conn.query("update `users` set `household_id` = null where `id` = ?", post, function (err, res) {
            if (err) process.emit("mysqlError", err);
            else cb(body);
        });

    }

    static addUserToHousehold(householdId, uid, cb) {
        let post = [
            householdId,
            uid
        ];
        conn.query("update `users` set `household_id` = ? where `uid` = ?", post, function (err, res) {
            if (err) process.emit("mysqlError", err);
            else cb(res.rowsAffected);
        })
    }

}

module.exports = Household;
