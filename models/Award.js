let mysql = require('mysql');
let conn = require('../helpers/connection')(mysql);

class Award {
    static getAwardByHouseholdID(id, user, cb) {
        conn.query("select * from `awards` where `household_id` = ? limit 1", [id],
            function (err, rows, fields) {
                if(err) return next(err);

                cb(user, rows[0]);
            });
    }
}

module.exports = Award;