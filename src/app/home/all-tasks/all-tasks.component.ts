import {Component, OnInit} from "@angular/core";
import {ApiService} from "../../../service/api.service";
import {User} from "../../../models/user.model";
import {UpdateTaskListService} from "../../../service/update-task-list.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.css']
})
export class AllTasksComponent implements OnInit {

    dialogVisible:Boolean = false;

    ngOnInit(): void {
        this.getUser();
    }

    user: User;
    loading: Boolean = true;

    constructor(private apiSevice: ApiService, private updateTaskListService:UpdateTaskListService, private router:Router) {
        updateTaskListService.listUpdated$.subscribe((data) => {
            this.getUser();
        })
    }

    getUser() {
        this.apiSevice
            .getEverything()
            .subscribe(
                data => {
                    this.user = data;
                    this.loading = false;
                },
                error => console.log(error)
            );
    }

    showCreateTask(){
        this.dialogVisible=!this.dialogVisible;
        let stateObj = { foo: this.router.url };
        history.pushState(stateObj, "popup", "task");
    }

}
