/**
 * Created by Student on 28/12/2016.
 */
"use strict"
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var finishedTaskSchema = new Schema({
    id: Number,
    name : String,
    dueDate : String,
    description: String,
    period : Number,
    household_id: Number,
    assigned_to : Number,
    points :Number,
    done : Boolean,
    finished_by: Number,
    finished_on : String

});


var finishedTasksModel = mongoose.model("finishedTasks",finishedTaskSchema);
module.exports = finishedTasksModel;
