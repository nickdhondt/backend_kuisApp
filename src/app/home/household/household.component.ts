import {Component, OnInit} from "@angular/core";
import {User} from "../../../models/user.model";
import {ApiService} from "../../../service/api.service";
import {UpdateHouseholdOverviewService} from "../../../service/update-household-overview.service";

@Component({
    selector: 'app-household',
    templateUrl: './household.component.html',
    styleUrls: ['./household.component.scss']
})
export class HouseholdComponent implements OnInit {

    showDialogLeave: boolean = false;

    ngOnInit(): void {
        this.getUser();
        this.updateHouseholdOverviewService.householdUpdated$.subscribe((data) => {
            this.getUser()
        });
    }

    user: User;
    loading: Boolean = true;

    constructor(private apiSevice: ApiService, private updateHouseholdOverviewService: UpdateHouseholdOverviewService) {

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

    updateHouseholdComponent(user) {
        this.user = user;
    }
}
