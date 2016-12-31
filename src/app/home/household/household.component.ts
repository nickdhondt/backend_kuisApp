import {Component, OnInit} from "@angular/core";
import {User} from "../../../models/user.model";
import {ApiService} from "../../../service/api.service";

@Component({
  selector: 'app-household',
  templateUrl: './household.component.html',
    styleUrls: ['./household.component.scss']
})
export class HouseholdComponent implements OnInit {

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
