/**
 * Created by Student on 28/12/2016.
 */

var mongoose = require("mongoose");
module.exports = (function (configURL, database) {


    var db = database.connect(configURL);

    mongoose.connect(configURL, function (err,res) {
        if(err) {
            console.log("Connection failed");
            console.log("ConfigURL : " +configURL);
        }
        else console.log("Connection succesfull");
    });


    // database.connection.on("open",function () {
    //     //mongoose test;
    //     var msg = "connection met mongo server" + configURL;
    //     var collections = database.connection.collections;
    //     msg += "\n \t with known collections/models: ";
    //     for (var property in collections) {
    //         msg += property.name + ", ";
    //
    //     }
    //     console.log("MEssage collections: " +msg);
    //
    // });

    database.connection.on("error", function (error) {
        console.log("connection error : " + error.message);
        throw new Error("CONNECTION ERROR : " + error.message);
    });
    database.connection.on("close",function () {
        console.log("Connection closed", configURL);
    });

    return database;

});