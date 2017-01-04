/**
 * Created by Bart on 31/12/2016.
 */
let moment = require("moment");

function checkTaskFormat(req, res, next) {

    if(!moment(req.body.dueDate).isValid()){
        console.log("wrong date");
        return next(new Error("wrong date"));
    }
    else {
        req.body.dueDate = moment(req.body.dueDate).format("YYYY-MM-DD");
        next();
    }
}

module.exports = checkTaskFormat;
