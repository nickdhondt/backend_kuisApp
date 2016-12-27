/**
 * Created by Student on 27/12/2016.
 */
import {Task} from "./task.model";
import {User} from "./user.model";

export class Household {

    private taskstodo: Task[];
    private countFinishedTasks: number;
    private countFinishedAwards: number;
    private countTotalScore: string;
    private countTasks: number;
    private mostPopularTask: string;
    private mostAwardsWon: string;
    private lastAward: string;
    private lastAwardWonBy: string;
    private tasks: Task[];
    private users: User[];
    private award?: any;

    constructor() {
    }

    public static makeHouseholdFromJSON(item): Household {

        let household: Household;

        household.taskstodo = item.taskstodo;
        household.countFinishedTasks = item.countFinishedTasks;
        household.countFinishedAwards = item.countFinishedAwards;
        household.countTotalScore = item.countTotalScore;
        household.countTasks = item.countTasks;
        household.mostPopularTask = item.mostPopularTask;
        household.mostAwardsWon = item.mostAwardsWon;
        household.lastAward = item.lastAward;
        household.lastAwardWonBy = item.lastAwardWonBy;
        household.tasks = item.tasks;
        household.users = item.users;
        household.award = item.award;

        return household;
    }
}