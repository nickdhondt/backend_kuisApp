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
                        if (user.household_id !== undefined) {
                            socket.householdID = user.household_id;
                            socket.join("household_" + user.household_id);
                        } else {
                            socket.householdID = user.id;
                            socket.join("household_" + user.id);
                        }
                        socket.uid = uid;
                    })
                });
        });
        socket.on("chat-message", function (msg) {
            User.getUserByUID(socket.uid, function (data) {
                io.to('household_' + socket.householdID).emit("sent-message", {user: {imgsrc: data.imgsrc, name: data.name, lname: data.lname}, message: msg});
            });
        })
    });

    return router;
};
