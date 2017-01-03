import {Component, OnInit, Input, EventEmitter} from "@angular/core";
import {ApiService} from "../../../service/api.service";
import {Household} from "../../../models/household.model";
import {User} from "../../../models/user.model";
import {Award} from "../../../models/award.model";
import {Router} from "@angular/router";


@Component({
    selector: 'app-household-overview',
    templateUrl: './household-overview.component.html',
    styleUrls: ['./household-overview.component.css']
})
export class HouseholdOverviewComponent implements OnInit {


    @Input() household: Household;
    @Input() users: User[];
    showDialog: boolean = false;
    showJoinHouseholdDialog:boolean=false;
    showMakeHouseholdDialog:boolean=false;
    selectedUser: User;
    @Output() receivedHousehold: EventEmitter<any> = new EventEmitter();

    fbUser : firebase.User;

    constructor(private apiService: ApiService, public router:Router) {

    }

    openUserPopup(user:User){

        this.showDialog = !this.showDialog; this.selectedUser = user;

        let stateObj = { foo: this.router.url };
        history.pushState(stateObj, "popup", "user");

    }
    sendUserToUpper(household) {
        this.receivedHousehold.emit(household);
    }

    ngOnInit() {
          if (this.household && !this.household.award) this.household.award = new Award();
    }

    addAwardToHousehold(award) {
        this.household.award = award;
    }

    receiveHousehold(household) {
      this.apiService.getEverything().subscribe(data=> {
        this.household = data.household;
      });
    }

}
