import {Component, OnInit, Input, Output, EventEmitter, trigger, style, animate, transition} from "@angular/core";
import {Task} from "../../../models/task.model";
import {User} from "../../../models/user.model";
import {ApiService} from "../../../service/api.service";
import {isUndefined} from "util";
import _ from "lodash";

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

    constructor(private apiService:ApiService) {

    }

    ngOnInit() {
        if (this.task === undefined) this.task = new Task();
    }

    close() {
        this.visible = false;
        this.visibleChange.emit(this.visible);
    }
    add() {
        // TODO: propagate to list
        let props = _.sortBy(Object.getOwnPropertyNames(this.task));
        let required = _.sortBy(["period", "points", "description", "name", "dueDate", "assigned_to"]);
        if(_.isEqual(props, required)) {
            this.apiService.addTask(this.task).subscribe((data)=>{
                this.close();
            });
        }
    }
    save(){
        let props = _.sortBy(Object.getOwnPropertyNames(this.task));
        let required = _.sortBy(["period", "points", "description", "name", "dueDate", "assigned_to", "id", "household_id"]);
        console.log(_.isEqual(props, required));
        if(_.isEqual(props, required)) {
            this.apiService.updateTask(this.task).subscribe((data)=>{
                this.close();
            });
        }
    }
    delete(){
        //TODO : code to delete task
        alert("WERKT NOG NIET!!!!!!");
        window.location.href ="https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }

}
