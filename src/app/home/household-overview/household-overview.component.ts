import {Component, OnInit} from "@angular/core";
import {ApiService} from "../../../service/api.service";
import {Household} from "../../../models/household.model";

@Component({
    selector: 'app-household-overview',
    templateUrl: './household-overview.component.html',
    styleUrls: ['./household-overview.component.css']
})
export class HouseholdOverviewComponent implements OnInit {

    household: Household = new Household();

    constructor(private apiService: ApiService) {
    }

    ngOnInit() {
        this.getHousehold();
    }

    private getHousehold(): void {

        this.apiService
            .getHousehold()
            .subscribe(
                data => this.household = data,
                error => console.log(error));
    }

}
