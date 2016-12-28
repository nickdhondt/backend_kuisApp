/**
 * Created by Student on 28/12/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var finishedawardSchema = new Schema({
    id : Number,
    name: String,
    description: String,
    month : Date,
    winner_id: Number,
    household_id: Number,
    users : String,
    creator_id : Number
});

var finishedAward = mongoose.model("finishedAward",finishedawardSchema);

module.exports = finishedAward;