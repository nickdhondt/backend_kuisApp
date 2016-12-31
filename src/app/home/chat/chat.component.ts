import {Component, OnInit} from "@angular/core";
import {Household} from "../../../models/household.model";
import {ApiService} from "../../../service/api.service";

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

    private isHidden = true;

    household: Household = new Household();

    constructor(private apiService: ApiService) {

    }

    ngOnInit() {
        //this.getHousehold();
    }

    private toggleChat(): void {
        this.isHidden = !this.isHidden;
    }

//
//     private getHousehold(): void {
//
//         this.apiService
//             .getHousehold()
//             .subscribe(
//                 data => {
//
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
//     }

}
