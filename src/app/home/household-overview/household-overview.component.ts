import {Component, OnInit, Input} from "@angular/core";
import {ApiService} from "../../../service/api.service";
import {Household} from "../../../models/household.model";
import {User} from "../../../models/user.model";
import {AuthService} from "../../../auth/services/auth.service";


@Component({
    selector: 'app-household-overview',
    templateUrl: './household-overview.component.html',
    styleUrls: ['./household-overview.component.css']
})
export class HouseholdOverviewComponent implements OnInit {


    @Input() household: Household;
    showDialog: boolean = false;
    selectedUser: User;
    authenticatedUserUID: string;
    // loading: boolean = true;
    //merge comment

    constructor(private apiService: ApiService, private auth: AuthService) {

        this.authenticatedUserUID = auth.uid;

    }

    ngOnInit() {
        // this.getHousehold();
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
