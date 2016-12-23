let mysql = require('mysql');
let conn = require('../helpers/connection')(mysql);

class Award {
    static getAwardByHouseholdID(id) {
        return new Promise(function(resolve, reject) {
            conn.query("select * from `awards` where `household_id` = ? limit 1", [id],
                function (err, rows, fields) {
                    if(err) reject(err);

                    resolve(rows[0]);
                });
        });
    }
}

module.exports = Award;