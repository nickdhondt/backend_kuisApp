import {Component, OnInit, Input} from "@angular/core";
import {ApiService} from "../../../../service/api.service";
import {Task} from "../../../../models/task.model";
import {User} from "../../../../models/user.model";


@Component({
    selector: 'app-todolist',
    templateUrl: './todolist.component.html',
    styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

    @Input() tasksTodo: Task[];
    @Input() users: User[];

    showDialog: boolean = false;
    selectedTask: Task;

    constructor(private apiService: ApiService) {
    }

    ngOnInit() {

    }

    private user(id: number) {

        for (let user in this.users) {
            if (this.users[user].id == id) return this.users[user];
        }

        return new User();
    }

    private showDetail(task) {
        this.selectedTask = task;
        this.showDialog = !this.showDialog;
    }

    private cancel(task: Task, index: number) {

        setTimeout(() => this.tasksTodo.splice(index, 1), 300);

    }

    private finish(task: Task, index: number) {

        setTimeout(() => this.tasksTodo.splice(index, 1), 300);
    }

}
