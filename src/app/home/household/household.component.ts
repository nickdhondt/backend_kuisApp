import {Component, OnInit} from "@angular/core";
import {User} from "../../../models/user.model";
import {ApiService} from "../../../service/api.service";
import {UpdateHouseholdOverviewService} from "../../../service/update-household-overview.service";
import {Household} from "../../../models/household.model";
import {Router} from "@angular/router";
import {SocketService} from "../../../service/socket.service";

@Component({
    selector: 'app-household',
    templateUrl: './household.component.html',
    styleUrls: ['./household.component.scss']
})
export class HouseholdComponent implements OnInit {

    showDialogLeave: boolean = false;
    showDialogEdit: boolean = false;


    ngOnInit(): void {
        this.getUser();

        this.socketService.taskUpdates().subscribe((data) => {
            this.getUser()
        })


    }

    user: User;
    loading: Boolean = true;
    currenthousehold: Household;

    constructor(private apiSevice: ApiService, private socketService: SocketService, private updateHouseholdOverviewService: UpdateHouseholdOverviewService, public router: Router) {

    }

    getUser() {
        this.apiSevice
            .getEverything()
            .subscribe(
                data => {
                    this.user = data;
                    this.loading = false;
                    this.currenthousehold = data.household;
                },
                error => {
                }
            );
    }

    updateHouseholdComponent(user) {
        this.user = user;
    }

    openHouseholdDetailPopup(user) {
        this.showDialogEdit = !this.showDialogEdit;

        let stateObj = {foo: this.router.url};
        history.pushState(stateObj, "popup", "currenthousehold");
    }
}
