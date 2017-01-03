import {Component, OnInit, Input} from "@angular/core";
import {ChartType, ChartOptions, ChartEvent} from "angular2-chartist";
import {Household} from "../../../../../models/household.model";
import * as moment from "moment";
import * as Chartist from "chartist";
import {ApiService} from "../../../../../service/api.service";
import IChartistAnimations = Chartist.IChartistAnimations;
require('chartist-plugin-legend');

@Component({
    selector: 'app-finished-bar',
    templateUrl: './finished-bar.component.html',
    styleUrls: ['./finished-bar.component.scss']
})
export class FinishedBarComponent implements OnInit {

    type: ChartType;
    data: Promise<Chartist.IChartistData>;

    options: ChartOptions;
    events: ChartEvent;

    @Input() household: Household;

    constructor(private apiService: ApiService) {
        this.type = 'Bar';

        this.data = new Promise(resolve => {
            this.getStats(resolve);
        });

        this.options = {
            showArea: false,
            showPoint: false,
            showLine: true,
            plugins: [Chartist.plugins.legend()],
            axisX: {
                showGrid: false,
                labelInterpolationFnc: function (value, index) {
                    return index % 2 === 0 ? value : null;
                }
            },
            axisY: {
                showGrid: true,
                showLabel: true
            }
        };

        this.events = {
            "draw": this.draw
        };

    }

    ngOnInit() {
    }

    private getStats(resolve){
        this.apiService.getFinishedCanceledStats().subscribe(
            data => {

                let labels = [];
                let series = [{"name": "canceled", "data":[]},{"name": "finished", "data":[]}];

                for (let i = 0; i <= 12; i++) {
                    labels.push(moment().subtract(i, 'months'));
                }

                data = data.map(m=>{
                    return {
                        moment: moment({y:m._id.year, M:m._id.month-1}),
                        done: m._id.done,
                        count: m.count
                    };
                });

                labels.forEach(l=>{

                    let res = data.filter((d)=>{
                        return d.moment.year() == l.year() && d.moment.month() == l.month();
                    });

                    if(res.length==0){
                        series[0].data.push(0);
                        series[1].data.push(0);
                    }
                    if(res.length==1 && !res[0].done){
                        series[0].data.push(res[0].count);
                        series[1].data.push(0);
                    }
                    if(res.length==1 && res[0].done) {
                        series[0].data.push(0);
                        series[1].data.push(res[0].count);
                    }
                    if(res.length==2) {
                        res[0].done ? series[1].data.push(res[0].count) : series[0].data.push(res[0].count);
                        res[1].done ? series[1].data.push(res[1].count) : series[0].data.push(res[1].count);
                    }
                });


                labels = labels.map(l=>{return l.format("MM/YY")});
                labels.reverse();

                series[0].data.reverse();
                series[1].data.reverse();

                console.log({labels: labels, series:series});

                resolve({labels: labels, series:series});


            },
            error => console.log(error))
    }


    draw = function (data) {

        if (data.type === 'bar') {
            data.element.attr({
                style: 'stroke-width: 0px'
            });
            let strokeWidth = 10;

            if (data.seriesIndex === 0) {
                data.element.animate({
                    y2: {
                        begin: 0,
                        dur: 500,
                        from: data.y1,
                        to: data.y2,
                        easing: Chartist.Svg.Easing.easeOutSine,
                    },
                    'stroke-width': {
                        begin: 0,
                        dur: 1,
                        from: 1,
                        to: strokeWidth,
                        fill: 'freeze',
                    }
                }, false);
            }

            if (data.seriesIndex === 1) {
                data.element.animate({
                    y2: {
                        begin: 500,
                        dur: 500,
                        from: data.y1,
                        to: data.y2,
                        easing: Chartist.Svg.Easing.easeOutSine,
                    },
                    'stroke-width': {
                        begin: 500,
                        dur: 1,
                        from: 0,
                        to: strokeWidth,
                        fill: 'freeze',
                    }
                }, false);
            }
        }
    };
}
