import {Component, OnInit, Input, EventEmitter} from "@angular/core";
import {Award} from "../../../../models/award.model";
import {Output} from "@angular/core/src/metadata/directives";
import {User} from "../../../../models/user.model";
import {Household} from "../../../../models/household.model";


@Component({
    selector: 'app-award',
    templateUrl: './award.component.html',
    styleUrls: ['./award.component.css']
})
export class AwardComponent implements OnInit {

    //currentaward:Award;
    @Input() award: Award;
    @Input() users: User[];
    @Input() household:Household;

    // @Output() showDetail = new EventEmitter();
    // @Output()showNew = new EventEmitter();

    @Output() addAwardToHousehold = new EventEmitter();

    showDialogAward: boolean=false;
    showDialogNewAward:boolean=false;
    //showDialog:boolean=false;
    //showNewAwardDialog:boolean=false;

    user: User;

    constructor() {
    }

    private findUser() {
        for (let user in this.users) {
            if (this.users[user].id == this.award.creator_id) {
                //console.log(this.users[user].name);
                this.user = this.users[user];
            }
        }
    }

    ngOnInit() {

        if (this.award && this.award.creator_id) this.findUser();

        else this.award = null;
    }

    receiveAwardfromDialog(award) {
        this.award = award;
        this.findUser();
        this.addAwardToHousehold.emit(award);
    }

    // private user(id:number) {
    //
    //
    // }
}
