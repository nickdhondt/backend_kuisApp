/**
 * Created by Bart on 26/12/2016.
 */
"use strict";
var Task = (function () {
    function Task() {
    }
    Task.makeTaskFromJSON = function (item) {
        var task = new Task();
        task.id = item.id;
        task.name = item.name;
        task.dueDate = new Date(Date.parse(item.dueDate));
        task.description = item.description;
        task.period = item.period;
        task.assigned_to = item.assigned_to;
        task.household_id = item.household_id;
        task.points = item.points;
        return task;
    };
    return Task;
}());
exports.Task = Task;
