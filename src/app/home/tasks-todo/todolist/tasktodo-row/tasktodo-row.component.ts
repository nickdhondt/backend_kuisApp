import {Component, OnInit, Input} from "@angular/core";
import {Task} from "../../../../../models/task.model";
import * as moment from "moment";
import {User} from "../../../../../models/user.model";


@Component({
    selector: 'app-tasktodo-row',
    templateUrl: './tasktodo-row.component.html',
    styleUrls: ['./tasktodo-row.component.css']
})
export class TasktodoRowComponent implements OnInit {

    @Input() task: Task;
    @Input() user: User;


    constructor() {

    }

    ngOnInit() {
    }

    get dateDiff(): number {

        return Math.ceil(moment.duration(moment(this.task.dueDate).diff(moment())).asDays());

    }

}
