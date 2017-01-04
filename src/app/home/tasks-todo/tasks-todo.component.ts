import {Component, OnInit} from "@angular/core";
import {ApiService} from "../../../service/api.service";
import {User} from "../../../models/user.model";
import {UpdateHouseholdOverviewService} from "../../../service/update-household-overview.service";
import {UpdateTaskListService} from "../../../service/update-task-list.service";

@Component({
  selector: 'app-tasks-todo',
  templateUrl: './tasks-todo.component.html',
  styleUrls: ['./tasks-todo.component.css']
})
export class TasksTodoComponent implements OnInit {

    ngOnInit(): void {
        this.getUser();
        this.updateHouseholdOverviewService.householdUpdated$.subscribe((data) => {
            this.getUser()
        });
        this.updateTaskListService.listUpdated$.subscribe((data) => {
            this.getUser();
        })
    }

    user: User;

    currentUser:String;
    loading: Boolean = true;

    constructor(private apiSevice: ApiService, private updateHouseholdOverviewService: UpdateHouseholdOverviewService, private updateTaskListService:UpdateTaskListService) {
    }

    getUser() {
        this.apiSevice
            .getEverything()
            .subscribe(
                data => {
                    this.user = data;
                    this.loading = false;
                    this.currentUser = this.user.uid;
                },
                error => console.log(error)
            );
    }

  receivenewHousehold(id)
  {
    console.log("ReceivenewHousehold"+id);
  }


}
