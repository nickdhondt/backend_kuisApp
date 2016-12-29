import {Component, OnInit, Input, Output, EventEmitter, trigger, style, animate, transition} from "@angular/core";
import {Task} from "../../../models/task.model";
import {User} from "../../../models/user.model";


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
    @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() {
    }

    ngOnInit() {

    }

    close() {
        this.visible = false;
        this.visibleChange.emit(this.visible);
    }
    saved(){
        this.visible = false;
        this.visibleChange.emit(this.visible);
    }

}
