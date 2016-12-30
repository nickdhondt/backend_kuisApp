import {Component, OnInit, Input, Output, EventEmitter} from "@angular/core";
import {User} from "../../../../../models/user.model";
import {Task} from "../../../../../models/task.model";
import * as moment from "moment";

@Component({
    selector: 'app-task-row',
    templateUrl: './task-row.component.html',
    styleUrls: ['./task-row.component.scss'],

})
export class TaskRowComponent implements OnInit {

    @Input() task: Task;
    @Input() user: User;
    @Output() showDetail = new EventEmitter();

    state: string;

    showDetailClick() {
        this.showDetail.emit(this.task);
    }


    constructor() {

    }

    ngOnInit() {
    }

    get dateDiff(): number {

        return Math.ceil(moment.duration(moment(this.task.dueDate).diff(moment())).asDays());

    }
}
