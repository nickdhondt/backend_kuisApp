/**
 * Created by Student on 28/12/2016.
 */

var mongoose = require("mongoose");
module.exports = (function (configURL, database) {


    var db = database.connect(configURL);


    database.connection.on("open",function () {
        //mongoose test
        console.log("Connection succesfull");

    });

    database.connection.on("error", function (error) {
        console.log("connection error : " + error.message);
        throw new Error("CONNECTION ERROR : " + error.message);
    });
    database.connection.on("close",function () {
        console.log("Connection closed", configURL);
    });

    return database;

});
