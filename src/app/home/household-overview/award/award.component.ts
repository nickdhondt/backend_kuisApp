import {Component, OnInit, Input} from "@angular/core";
import {Award} from "../../../../models/award.model";

@Component({
    selector: 'app-award',
    templateUrl: './award.component.html',
    styleUrls: ['./award.component.css']
})
export class AwardComponent implements OnInit {

    @Input() award: Award;

    constructor() {
    }

    ngOnInit() {
    }

}
