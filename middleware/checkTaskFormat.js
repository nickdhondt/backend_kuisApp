/**
 * Created by Bart on 31/12/2016.
 */





function checkTaskFormat(req, res, next) {

    let format = 'we require this kind of object: {"id":"7","done":true,"finished_by":"uidstring","finished_on":"2016-10-10"}';

    let task = {};

    if (!req.body.id) return next(new Error(format));
    task.id = Number(req.body.id);
    if (req.body.done === undefined) return next(new Error(format));
    task.done = req.body.done;
    if (!req.body.finished_by) return next(new Error(format));
    task.finished_by = req.body.finished_by;
    if (!req.body.finished_on) return next(new Error(format));
    task.finished_on = req.body.finished_on;

    req.task = task;

    next();
}

module.exports = checkTaskFormat;