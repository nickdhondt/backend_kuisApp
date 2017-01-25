/**
 * Created by Bart on 31/12/2016.
 */
let moment = require("moment");

function checkFinishedTaskFormat(req, res, next) {

    let format = 'we require this kind of object: {"id":"7","done":true,"finished_by":"uidstring","finished_on":"2016-10-10"}';

    let task = {};

    if (!req.body.id) return next(new Error(format));
    if (req.body.done === undefined) return next(new Error(format));
    if (!req.body.finished_by) req.body.finished_by = res.locals.uid;
    if (!req.body.finished_on) return next(new Error(format));
    if (!moment(req.body.finished_on).isValid()) return next(new Error(format));

    task.id = Number(req.body.id);
    task.done = req.body.done;
    task.finished_on = req.body.finished_on;
    task.finished_by = req.body.finished_by;
    if(req.body.dueDate) task.dueDate = req.body.dueDate;

    req.task = task;

    next();
}

module.exports = checkFinishedTaskFormat;