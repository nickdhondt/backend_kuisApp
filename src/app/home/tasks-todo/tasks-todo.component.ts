import {Component, OnInit} from "@angular/core";
import {ApiService} from "../../../service/api.service";
import {User} from "../../../models/user.model";

@Component({
  selector: 'app-tasks-todo',
  templateUrl: './tasks-todo.component.html',
  styleUrls: ['./tasks-todo.component.css']
})
export class TasksTodoComponent implements OnInit {

    ngOnInit(): void {
        this.getUser();
    }

    user: User;

    currentUser:String;
    loading: Boolean = true;

    constructor(private apiSevice: ApiService) {
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
