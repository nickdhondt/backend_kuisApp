module.exports = function (io) {
    let app = require('express');
    let router = app.Router();
    let admin = require("firebase-admin");
    let User = require("../models/User");
    let request = require("request");

    io.on('connection', function (socket) {
        socket.on("subscribe", function (token) {
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
                body = JSON.stringify({condition: "'household_" + socket.householdID + "' in topics", priority: "high", data:{fromId: data.id, announcement: msg}});

                let options = {
                    url: "https://fcm.googleapis.com/fcm/send",
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "key=AAAADThleZQ:APA91bGw5-Al9JrL7lY2QUOJYNjVUkZu1OnM15Y5NP-fzwYmhL0kVi6cO5tdJtyJg0vrdbdrWDLC7ELvWF0vL7UtVWIGpspZiCiHE68viwiWkCFaKyvE77Up-QCb026rr6VEFeU90Y2Z2Pvm7ajz-5Xi5Ov33bPVKA"
                    },
                    body: body
                };

                request(options, function (error, response, body) {
                });
            });
        });
    });

    process.on("task-finished", function (taskData) {
        io.to('household_' + taskData.householdID).emit("tasks-update", {taskID: taskData.taskID, done:taskData.done});

        body = JSON.stringify({
            condition: "'household_" + taskData.householdID + "' in topics",
            priority: "high",
            data: {taskFinished: taskData.taskID, userFinished: taskData.userID, done:taskData.done}
        });

        let options = {
            url: "https://fcm.googleapis.com/fcm/send",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "key=AAAADThleZQ:APA91bGw5-Al9JrL7lY2QUOJYNjVUkZu1OnM15Y5NP-fzwYmhL0kVi6cO5tdJtyJg0vrdbdrWDLC7ELvWF0vL7UtVWIGpspZiCiHE68viwiWkCFaKyvE77Up-QCb026rr6VEFeU90Y2Z2Pvm7ajz-5Xi5Ov33bPVKA"
            },
            body: body
        };

        request(options, function (error, response, body) {
        });
    });

    router.all('/', function (req, res, next) {
        next();
    });

    return router;
};
