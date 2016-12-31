import {Component, OnInit, Input, EventEmitter} from "@angular/core";
import {Award} from "../../../../models/award.model";
import {Output} from "@angular/core/src/metadata/directives";


@Component({
    selector: 'app-award',
    templateUrl: './award.component.html',
    styleUrls: ['./award.component.css']
})
export class AwardComponent implements OnInit {

    currentaward:Award;
    @Input()award:Award;
    @Output()showDetail = new EventEmitter();
    showDialog:boolean=false;
    showNewAwardDialog:boolean=false;

    constructor() {
    }

    ngOnInit() {
    }





}
