import {Pipe, PipeTransform} from "@angular/core";
import {Task} from "../models/task.model";

@Pipe({
    name: 'tasksFilter'
})
export class TasksFilterPipe implements PipeTransform {

    transform(tasks:Array<Task>, filter:string):Array<Task> {
        return tasks.filter((task) => {
            return task.name.toLowerCase().includes(filter.toLowerCase());
        });
    }
}