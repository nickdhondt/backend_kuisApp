"use strict";
let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let announcementSchema = new Schema({
    message : String,
    dueDate: Date,
    description: String,
    period : Number,
    household_id: Number,
    assigned_to : Number,
    points :Number,
    done : Boolean,
    finished_by: Number,
    finished_on: Date

});


let announcementModel = mongoose.model("finishedTasks",announcementSchema);
module.exports = announcementModel;
/**
 * Created by Nick on 5/01/2017.
 */
