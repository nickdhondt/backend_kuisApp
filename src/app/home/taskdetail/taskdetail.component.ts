import {Component, OnInit, Input, Output, EventEmitter, trigger, style, animate, transition} from "@angular/core";
import {Task} from "../../../models/task.model";
import {User} from "../../../models/user.model";
import {ApiService} from "../../../service/api.service";
import {isUndefined} from "util";
;


@Component({
    selector: 'app-taskdetail',
    templateUrl: './taskdetail.component.html',
    styleUrls: ['./taskdetail.component.css'],
    animations: [
        trigger('dialog', [
            transition('void => *', [
                style({transform: 'scale3d(.3, .3, .3)'}),
                animate(100)
            ]),
            transition('* => void', [
                animate(100, style({transform: 'scale3d(.0, .0, .0)'}))
            ])
        ])
    ]
})
export class TaskdetailComponent implements OnInit {

    @Input() task: Task;
    @Input() users: User[];
    @Input() closable = true;
    @Input() visible: boolean;
    @Input() newTask:Boolean = false;
    @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(private apiservice:ApiService) {

    }

    ngOnInit() {
        if (this.task === undefined) this.task = new Task();
    }

    close() {
        this.visible = false;
        this.visibleChange.emit(this.visible);
    }
    add() {

    }
    save(){
        // TODO : code to save changes
        this.visible = false;
        this.visibleChange.emit(this.visible);


    }
    delete(){
        //TODO : code to delete task
    }

}
