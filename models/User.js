let mysql = require('mysql');
let conn = require('../helpers/connection')(mysql);

class User {
    static getUserByUID(uid) {
        return new Promise(function(resolve, reject) {
            conn.query("select `id`, `name`, `lname`, `email`, `household_id`, `score`, `phoneNumber`, `uid`, `imgsrc` from `users` where `uid` = ? limit 1", [uid],
                function (err, rows, fields) {
                    if(err) reject(err);

                    resolve(rows[0]);
                });
        });
    }
}

module.exports = User;