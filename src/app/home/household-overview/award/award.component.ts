import {Component, OnInit, Input, EventEmitter} from "@angular/core";
import {Award} from "../../../../models/award.model";
import {Output} from "@angular/core/src/metadata/directives";
import {User} from "../../../../models/user.model";


@Component({
    selector: 'app-award',
    templateUrl: './award.component.html',
    styleUrls: ['./award.component.css']
})
export class AwardComponent implements OnInit {

    currentaward:Award;
    @Input()award:Award;
    @Input() user: User
    @Output() showDetail = new EventEmitter();
    @Output()showNew = new EventEmitter();
    showDialogAward: boolean=false;
    showDialogNewAward:boolean=false;
    showDialog:boolean=false;
    showNewAwardDialog:boolean=false;

    constructor() {
    }

    ngOnInit() {
    }





}
