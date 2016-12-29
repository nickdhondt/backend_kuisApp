/**
 * Created by Student on 27/12/2016.
 */
import {Task} from "./task.model";
import {User} from "./user.model";
import {Award} from "./award.model";

export class Household {

    public id: number;
    public name: string;
    public taskstodo: Task[];
    public countFinishedTasks: number;
    public countFinishedAwards: number;
    public countTotalScore: string;
    public countTasks: number;
    public mostPopularTask: string;
    public mostAwardsWon: string;
    public lastAward: string;
    public lastAwardWonBy: string;
    public tasks: Task[];
    public users: User[];
    public award: Award;

    constructor() {
    }

    public static makeHouseholdFromJSON(item): Household {

        let household: Household = new Household();

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
    }
}