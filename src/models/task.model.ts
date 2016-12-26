/**
 * Created by Bart on 26/12/2016.
 */


export class Task {

    constructor(public id: number,
                public name: string,
                public dueDate: Date,
                public description: string,
                public period: number,
                public assigned_to: number,
                public household_id: number,
                public points: number,) {
    }

    public static makeTaskFromJSON(item): Task {

        return new Task(
            item.id,
            item.name,
            new Date(Date.parse(item.dueDate)),
            item.description,
            item.period,
            item.assigned_to,
            item.household_id,
            item.points)
    }
}
