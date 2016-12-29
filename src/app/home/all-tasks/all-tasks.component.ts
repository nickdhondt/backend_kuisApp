import {Component, OnInit} from "@angular/core";
import {ApiService} from "../../../service/api.service";
import {User} from "../../../models/user.model";

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.css']
})
export class AllTasksComponent implements OnInit {

    ngOnInit(): void {
        this.getUser();
    }

    user: User;
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
                },
                error => console.log(error)
            );
    }

}
