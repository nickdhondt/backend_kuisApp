module.exports = function (io) {
    let app = require('express');
    let router = app.Router();
    let admin = require("firebase-admin");
    let User = require("../models/User");

    router.all('/', function (req, res, next) {
        next();
    });

    io.on('connection', function (socket) {
        socket.on("subscribe", function (token) {
            console.log(token);
            admin.auth().verifyIdToken(token)
                .then(function (decodedToken) {
                    let uid = decodedToken.uid;
                    User.getUserByUID(uid, function (user) {
                        console.log("Subscribe to room: household_" + user.household_id);
                        socket.householdID = user.household_id;
                        socket.join("household_" + user.household_id);
                    })
                });
        });
        socket.on("chat-message", function (data) {
            io./*to('household_' + socket.householdID).*/emit("sent-message", data);
            console.log("sent to household: " + socket.householdID);
        })
    });

    return router;
};
