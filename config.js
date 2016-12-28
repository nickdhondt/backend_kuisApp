/**
 * Created by Student on 28/12/2016.
 */
"use strict"
var config = {
    HOST : "http://localhost",
    PORT : process.env.PORT||3000,
    MONGODBURL : process.env.MONGO_URI||"mongodb://admin:abc123@ds163667.mlab.com:63667/heroku_s3b0kwzb"
};

module.exports=config;