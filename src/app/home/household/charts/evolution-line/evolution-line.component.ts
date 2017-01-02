import {Component, OnInit} from "@angular/core";
import {ChartType} from "angular2-chartist";

@Component({
    selector: 'app-evolution-line',
    templateUrl: './evolution-line.component.html',
    styleUrls: ['./evolution-line.component.scss']
})
export class EvolutionLineComponent implements OnInit {

    type: ChartType;
    data: any;

    constructor() {
        this.type = 'Line';
        this.data = {
            "labels": [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec"
            ],
            "series": [
                [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
                [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
            ]
        }
    }

    ngOnInit() {
    }

}
