"use strict";
var Household = (function () {
    function Household() {
    }
    Household.makeHouseholdFromJSON = function (item) {
        var household = new Household();
        household.id = item.id;
        household.name = item.name;
        // household.taskstodo = item.taskstodo;
        // household.countFinishedTasks = item.countFinishedTasks;
        // household.countFinishedAwards = item.countFinishedAwards;
        // household.countTotalScore = item.countTotalScore;
        // household.countTasks = item.countTasks;
        // household.mostPopularTask = item.mostPopularTask;
        // household.mostAwardsWon = item.mostAwardsWon;
        // household.lastAward = item.lastAward;
        // household.lastAwardWonBy = item.lastAwardWonBy;
        // household.tasks = item.tasks;
        household.users = item.users;
        household.award = item.award;
        return household;
    };
    return Household;
}());
exports.Household = Household;
