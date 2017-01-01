import {Component, OnInit, Input} from "@angular/core";
import {ApiService} from "../../../service/api.service";
import {Household} from "../../../models/household.model";
import {User} from "../../../models/user.model";
import {AuthService} from "../../../auth/services/auth.service";
import {Award} from "../../../models/award.model";


@Component({
    selector: 'app-household-overview',
    templateUrl: './household-overview.component.html',
    styleUrls: ['./household-overview.component.css']
})
export class HouseholdOverviewComponent implements OnInit {


    @Input() household: Household;
    @Input() users: User[];
    showDialog: boolean = false;
    selectedUser: User;
    authenticatedUserUID: string;
    showDialogAward: boolean=false;
    showDialogNewAward: boolean=false;
    fbUser : firebase.User;

    // loading: boolean = true;
    //merge comment

    constructor(private apiService: ApiService, private auth: AuthService) {

        this.authenticatedUserUID = auth.uid;
        this.fbUser= auth.authState.auth;

    }

    // toggleDialog() {
    //     if (this.household.award !== null) this.showDialogAward=!this.showDialogAward;
    //     else this.showDialogNewAward=!this.showDialogNewAward;
    // }

    ngOnInit() {

        if (!this.household.award) this.household.award = new Award();
    }

    addAwardToHousehold(award) {
        this.household.award = award;
    }


    // private fbUser(id:number){
    //     for(let fbUser in this.users){
    //         if(this.users[fbUser].id == id){
    //             console.log(this.users);
    //             return this.fbUser[fbUser];
    //         }
    //     }
    //     return new User()
    // }





}
