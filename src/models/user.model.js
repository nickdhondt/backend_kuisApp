"use strict";
/**
 * Created by Bart on 27/12/2016.
 */
var User = (function () {
    function User() {
    }
    User.makeUserFromJSON = function (item) {
        var user = new User();
        user.id = item.id;
        user.name = item.name;
        user.lname = item.lname;
        user.email = item.email;
        user.household_id = item.household_id;
        user.score = item.score;
        user.phoneNumber = item.phoneNumber;
        user.uid = item.uid;
        user.imgsrc = item.imgsrc;
        return user;
    };
    return User;
}());
exports.User = User;
