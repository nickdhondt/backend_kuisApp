/**
 * Created by Bart on 26/12/2016.
 */


export class Task {

    public id: number;
    public name: string;
    public dueDate: Date;
    public description: string;
    public period: number;
    public assigned_to: number;
    public household_id: number;
    public points: number;

    constructor() {
    }

    public static makeTaskFromJSON(item): Task {

        let task = new Task();

        task.id = item.id;
        task.name = item.name;
        task.dueDate = new Date(Date.parse(item.dueDate));
        task.description = item.description;
        task.period = item.period;
        task.assigned_to = item.assigned_to;
        task.household_id = item.household_id;
        task.points = item.points;

        return task;
    }
}
