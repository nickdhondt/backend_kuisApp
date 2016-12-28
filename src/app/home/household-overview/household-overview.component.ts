import {Component, OnInit} from "@angular/core";
import {ApiService} from "../../../service/api.service";
import {Household} from "../../../models/household.model";
import {User} from "../../../models/user.model";

@Component({
    selector: 'app-household-overview',
    templateUrl: './household-overview.component.html',
    styleUrls: ['./household-overview.component.css']
})
export class HouseholdOverviewComponent implements OnInit {

    household: Household = new Household();
    showDialog: boolean = false;
    selectedUser: User;

    constructor(private apiService: ApiService) {
    }

    ngOnInit() {
        this.getHousehold();
    }

    private getHousehold(): void {

        this.apiService
            .getHousehold()
            .subscribe(
                data => {
                    data.users.sort((a: User, b: User) => {
                        if (a.score < b.score) return 1;
                        if (b.score < a.score) return -1;
                        return 0;
                    });
                    this.household = data;
                },

                error => console.log(error)
            );
    }

}
