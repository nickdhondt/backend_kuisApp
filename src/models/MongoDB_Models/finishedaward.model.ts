/**
 * Created by Student on 28/12/2016.
 */
"use strict"

const Schema = require('mongoose').Schema;
const Model = require('mongoose').Model;
const Document = require('mongoose').Document;

export interface IFinishedAward extends Document{
    id:Number;
    name:String;
    description:String;
    month: String;
    winner_id:Number;
    household_id:Number
    users: String;
    creator_id:Number;
}
export const finishedAwardSchema = Schema({
    id : Number,
    name: String,
    description: String,
    month : String,
    winner_id: Number,
    household_id: Number,
    users : String,
    creator_id : Number
});



