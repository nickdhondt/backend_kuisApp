/**
 * Created by Student on 28/12/2016.
 */
"use strict";
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var finishedAwardSchema = new Schema({
    id: Number,
    name : String,
    description:String,
    month: String,
    winner_id: Number,
    household_id: Number,
    users: String,
    creator_id: Number
});


var finishedAwardModel = mongoose.model("finishedAwards",finishedAwardSchema);
module.exports = finishedAwardModel;
