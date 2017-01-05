module.exports = function (io) {
    let app = require('express');
    let router = app.Router();
    let admin = require("firebase-admin");
    let User = require("../models/User");
    let request = require("request");

    let Announcement = require('../Mongo/MongoDB_Models/announcement.model');

    io.on('connection', function (socket) {
        socket.on("subscribe", function (token) {
            admin.auth().verifyIdToken(token)
                .then(function (decodedToken) {

                    let uid = decodedToken.uid;
                    User.getUserByUID(uid, function (user) {

                        if (user.household_id !== null) {
                            socket.householdID = user.household_id;
                            socket.join("household_" + user.household_id);
                        } else {
                            socket.householdID = user.uid;
                            socket.join("household_" + user.id);
                        }
                        console.log("subscribe");
                        console.log(socket.householdID);
                        socket.uid = uid;
                    })
                });
        });

        socket.on("chat-message", function (msg) {
            User.getUserByUID(socket.uid, function (data) {
                console.log(socket.householdID);

                let newAnnouncement = Announcement({
                    imgsrc: data.imgsrc,
                    name: data.name,
                    lname: data.lname,
                    message: msg,
                    household_id: "" + socket.householdID
                });

                newAnnouncement.save(function (err) {
                    if (err) console.log(err);
                });

                io.to('household_' + socket.householdID).emit("sent-message", {
                    user: {
                        imgsrc: data.imgsrc,
                        name: data.name,
                        lname: data.lname
                    }, message: msg
                });
                body = JSON.stringify({
                    condition: "'household_" + socket.householdID + "' in topics",
                    priority: "high",
                    data: {
                        type: "a",
                        fromId: data.id,
                        message: parseNameForNotification(data) + ": " + msg
                    }
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
        });
    });

    process.on("task-finished", function (taskData) {

        io.to('household_' + taskData.householdID).emit("tasks-update", {taskID: taskData.taskID, done: taskData.done});

        body = JSON.stringify({
            condition: "'household_" + taskData.householdID + "' in topics",
            priority: "high",
            data: {
                type: "t",
                taskFinishedId: taskData.taskID,
                fromId: taskData.userID,
                message: parseNameForNotification(taskData) + " finished task '" + taskData.taskName + "'",
                done: taskData.done
            }
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

    function parseNameForNotification(user) {
        let name;

        if (user.name !== null && user.name === "") name = user.lname;
        else if (user.lname != null && user.lname === "") name = user.name;
        else name = user.name;

        return name;
    }

    router.all('/', function (req, res, next) {
        next();
    });

    return router;
};
