/**
 * Created by Student on 28/12/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var finishedTaskSchema = new Schema({
    id: Number,
    name : String,
    dueDate : Date,
    description: String,
    period : Number,
    household_id: Number,
    assigned_to : Number,
    points :  Number,
    done : Boolean,
    finished_by: Number,
    finished_on : Date

});

var finishedTask = mongoose.model("finishedTask",finishedTaskSchema);

module.exports = finishedTask;