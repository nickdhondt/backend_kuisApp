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
        //this.getTasksTodo();
    }

    private getTasksTodo(): void {

        // this.apiService
        //     .getTaskstodobyhousehold()
        //     .subscribe(
        //         data => {
        //             this.tasksTodo = data.sort((t1, t2) => {
        //                 if (t1.dueDate > t2.dueDate) return 1;
        //                 if (t1.dueDate < t2.dueDate) return -1;
        //                 return 0;
        //             });
        //             this.loading = false;
        //         },
        //         error => console.log(error)
        //     );
    }

}
