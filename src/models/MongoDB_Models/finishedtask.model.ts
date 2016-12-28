/**
 * Created by Student on 28/12/2016.
 */
"use strict"
const Schema = require('mongoose').Schema;
const Model = require('mongoose').Model;

var finishedTaskSchema = new Schema({
    id: Number,
    name : String,
    dueDate : String,
    description: String,
    period : Number,
    household_id: Number,
    assigned_to : Number,
    points :  Number,
    done : Boolean,
    finished_by: Number,
    finished_on : String

});




let finishedTask = Model("finishedTask",finishedTaskSchema);
module.exports = finishedTask;

