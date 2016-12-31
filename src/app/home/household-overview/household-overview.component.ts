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
    @Input() users:User[]
    showDialog: boolean = false;
    selectedUser: User;
    authenticatedUserUID: string;
    showDialogAward: boolean=false;
    showDialogNewAward: boolean=false;
    user : firebase.User;

    // loading: boolean = true;
    //merge comment

    constructor(private apiService: ApiService, private auth: AuthService) {

        this.authenticatedUserUID = auth.uid;
        this.user= auth.authState.auth;

    }

    toggleDialog() {
        if (this.household.award !== null) this.showDialogAward=!this.showDialogAward;
        else this.showDialogNewAward=!this.showDialogNewAward;
    }

    ngOnInit() {
        // this.getHousehold();
    }
    private user(id:number){
        for(let user in this.users){
            if(this.users[user].id == id){
                console.log(this.users);
                return this.user[user];
            }
        }
        return new User()
    }


    private getHousehold(): void {

//         this.apiService
//             .getHousehold()
//             .subscribe(
//                 data => {
//
//                     this.loading = false;
//
//                     if (!isUndefined(data.users)) {
//                         data.users.sort((a: User, b: User) => {
//                             if (a.score < b.score) return 1;
//                             if (b.score < a.score) return -1;
//                             return 0;
//                         });
//                         this.household = data;
//                     }
//                     else {
//
//                     }
//
//                 },
// //test
//                 error => console.log("error household " + error)
//             );
    }



}
