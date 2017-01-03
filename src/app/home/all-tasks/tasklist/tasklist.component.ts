import {Component, OnInit, Input} from "@angular/core";
import {ApiService} from "../../../../service/api.service";
import {Task} from "../../../../models/task.model";
import {User} from "../../../../models/user.model";
import {Router} from "@angular/router";

@Component({
    selector: 'app-tasklist',
    templateUrl: './tasklist.component.html',
    styleUrls: ['./tasklist.component.css'],
})
export class TasklistComponent implements OnInit {


    @Input() tasks: Task[];
    @Input() users: User[];

    showDialog: boolean = false;
    selectedTask: Task;

    constructor(private apiService: ApiService, private router: Router) {
    }

    addTaskToList(task) {
        console.log("oooh boy");
        console.log(task);
        this.tasks.push(task);
    }

    ngOnInit() {
        //this.getTasks();
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

        let stateObj = { foo: this.router.url };
        history.pushState(stateObj, "popup", "task");
    }


    private getTasks(): void {

        // this.apiService
        //     .getTasks()
        //     .subscribe(
        //         data => {
        //             this.tasks = data.sort((t1, t2) => {
        //                 if (t1.period > t2.period) return 1;
        //                 if (t1.period < t2.period) return -1;
        //                 return 0;
        //             });
        //             this.loading = false;
        //         },
        //         error => console.log(error)
        //     );
    }
}
