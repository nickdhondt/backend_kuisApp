/**
 * Created by Student on 28/12/2016.
 */

var mongoose = require("mongoose");
module.exports = (function (configURL, database) {




    database.connection.on("open",function () {
        //mongoose test
        console.log("Connection succesfull");

    });

    database.connection.on("error", function (error) {
        console.log("connection error : " + error.message);

    });
    database.connection.on("close",function () {
        console.log("Connection closed", configURL);
    });

  try{
    database.connect(configURL);
    db=mongoose.connection;
    console.log("Started connection on =" + (configURL.text).cyan + ", waiting for it to open");

  }catch(err){
    console.log(("Setting up failed to connect to" + configURL).red,err.message);
  }

    return database;

});
