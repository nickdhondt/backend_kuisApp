import {Component, OnInit, Input, Output, EventEmitter, trigger, style, animate, transition} from "@angular/core";
import {Task} from "../../../models/task.model";
import {User} from "../../../models/user.model";
import {ApiService} from "../../../service/api.service";
import _ from "lodash";
import * as moment from "moment";
import {PlatformLocation} from "@angular/common";

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
    @Output() newTaskEvent: EventEmitter<any> = new EventEmitter();

    private usersLocal:User[];

    constructor(private apiService:ApiService, private location:PlatformLocation) {

        location.onPopState((event)=>{
            this.close();
        })
    }

    ngOnInit() {
        if (this.task === undefined) this.task = new Task();

        let doMeUserSet:Boolean = false;

        for(let user of this.users) {
            if (user.id === null) doMeUserSet = true;
        }

        if (this.users !== undefined && !doMeUserSet) {
            this.usersLocal = _.map(this.users, _.clone);
            let doMeUser = new User;
            doMeUser.name = "everyone";
            doMeUser.id = null;

            this.usersLocal.push(doMeUser);
        }
    }

    ngOnChanges() {
        if (this.task !== undefined) {
            this.task.dueDate = moment(this.task.dueDate).format("YYYY-MM-DD");
        }
    }

    close() {
        this.visible = false;
        this.visibleChange.emit(this.visible);
    }
    add() {
        // TODO: propagate to list
        if(this.task.name !== undefined && this.task.dueDate !== undefined && this.task.assigned_to !== undefined && this.task.period !== undefined && this.task.points !== undefined) {
            this.apiService.addTask(this.task).subscribe((data)=>{
                this.newTaskEvent.emit(this.task);
                this.close();
            });
        }
    }
    save(){
        if(this.task.name !== undefined && this.task.dueDate !== undefined && this.task.assigned_to !== undefined && this.task.period !== undefined && this.task.points !== undefined) {
            this.apiService.updateTask(this.task).subscribe((data)=>{
                this.close();
            });
        }
    }
    deleteTask(){
        // TODO: propagate to list
        this.apiService.deleteTask(this.task.id).subscribe((data)=>{
            this.task = null;
            this.close()
        });
    }

}
