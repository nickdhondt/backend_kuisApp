import {Component, OnInit, Input} from "@angular/core";
import {Household} from "../../../../models/household.model";


@Component({
    selector: 'app-charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.scss'],

})
export class ChartsComponent implements OnInit {

    @Input() household: Household;

    constructor() {

    }

    ngOnInit() {
    }

}
