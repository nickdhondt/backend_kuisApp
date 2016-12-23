let mysql = require('mysql');
let conn = require('../helpers/connection')(mysql);

class User {
    static getUserByUID(uid, cb) {
        conn.query("select `id`, `name`, `lname`, `email`, `household_id`, `score`, `phoneNumber`, `uid`, `imgsrc` from `users` where `uid` = ? limit 1", [uid],
            function (err, rows, fields) {
                if(err) return next(err);

                cb(rows[0]);
        })
    }

    static getUsersByHouseholdID(id, user, cb) {
        conn.query("select * from `users` where `household_id` = ?", [id],
            function (err, rows, fields) {
                if(err) return next(err);

                cb(user, rows);
            })

    }
}

module.exports = User;