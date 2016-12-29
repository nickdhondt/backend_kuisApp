import {Component, OnInit, Input} from "@angular/core";
import {ApiService} from "../../../../service/api.service";
import {Task} from "../../../../models/task.model";
import {User} from "../../../../models/user.model";

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

    constructor(private apiService: ApiService) {
    }

    ngOnInit() {
        //this.getTasks();
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
