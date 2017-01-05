"use strict";
let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let announcementSchema = new Schema({
    message : String,
    imgsrc: String,
    name: String,
    lname: String,
    household_id: String
});


let announcementModel = mongoose.model("annoucements",announcementSchema);
module.exports = announcementModel;
/**
 * Created by Nick on 4/01/2017.
 */
