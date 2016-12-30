import {Pipe, PipeTransform} from "@angular/core";
import {Task} from "../models/task.model";

@Pipe({
    name: 'sort'
})
export class SortPipe implements PipeTransform {

    transform(value: Task[], args?: any): any {


        if (value == null) return null;

        switch (args) {
            case 'period': {
                value.sort((a, b) => {
                    if (a.period < b.period) {
                        return -1;
                    } else if (a.period > b.period) {
                        return 1;
                    } else {
                        return 0;
                    }
                });
            }
                break;
            default : {
                value.sort((a, b) => {
                    if (a.dueDate < b.dueDate) {
                        return -1;
                    } else if (a.dueDate > b.dueDate) {
                        return 1;
                    } else {
                        return 0;
                    }
                });
            }
        }

        return value;

    }

}
