import {Component, OnInit, Input} from "@angular/core";
import {ChartType, ChartOptions, ChartEvent} from "angular2-chartist";
import {Household} from "../../../../../models/household.model";
import {ApiService} from "../../../../../service/api.service";
import * as moment from "moment";
import * as Chartist from "chartist";
import IChartistAnimations = Chartist.IChartistAnimations;
require('chartist-plugin-legend');

@Component({
    selector: 'app-evolution-line',
    templateUrl: './evolution-line.component.html',
    styleUrls: ['./evolution-line.component.scss']
})
export class EvolutionLineComponent implements OnInit {

    type: ChartType;
    data: Promise<Chartist.IChartistData>;

    options: ChartOptions;
    events: ChartEvent;

    @Input() household: Household;

    constructor(private apiService: ApiService) {
        this.type = 'Line';

        this.data = new Promise(resolve => {
            this.getContributionEvolution(resolve);
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

    private getContributionEvolution(resolve) {
        this.apiService.getContributionEvolution().subscribe(
            data => {

                let years = [];
                let users = [];

                let series = [];
                let labels = [];

                for (let i = 0; i <= 12; i++) {

                    let month = moment().subtract(i, 'months').month() + 1;
                    let year = moment().subtract(i, 'months').year();

                    if (!years[year])
                        years[year] = [];

                    years[year].push(month);
                }

                data.map((year) => {

                    year.stats.map((stats) => {

                        if (!users[stats.user])
                            users[stats.user] = [];

                        if (!users[stats.user][stats.year])
                            users[stats.user][stats.year] = [];

                        users[stats.user][stats.year][stats.month] = stats.count;
                    });
                });

                Object.keys(years).map(y => {

                    Object.keys(users).map(u => {
                        series[u] = [];

                        if (!users[u][y]) users[u][y] = [];

                        years[y].map(m => {
                            if (!users[u][y][m]) users[u][y][m] = 0
                        });

                        users[u].map(y =>
                            y.map(m => series[u].push(m)))
                    });

                    years[y].map(m => {
                        labels.push(moment({y: parseInt(y), M: m - 1}));
                        labels.sort((l1, l2) => {
                            if (l1 < l2) return -1;
                            if (l2 < l1) return 1;
                            return 0;
                        })
                    })
                });

                labels = labels.map(l => {
                    return l.format("MMM")
                });


                let result = {labels: labels, series: []};

                Object.keys(series).map(s => {
                    result.series.push({"id": parseInt(s), "name": this.findUser(parseInt(s)), "data": series[s]})
                });

                result.series.sort((o1, o2) => {

                    if (o1.id > o2.id) return -1;
                    if (o1.id < o2.id) return 1;
                    return 0;
                });

                resolve(result);
            },
            error => console.log(error))
    }

    private findUser(id: number) {
        for (let user in this.household.users)
            if (this.household.users[user].id == id)
                return this.household.users[user].name;

        return "inactive member"
    }

    draw = function (data) {
        if (data.type === 'line' || data.type === 'area') {
            data.element.animate({
                d: {
                    begin: 200 * data.index,
                    dur: 2000,
                    from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                    to: data.path.clone().stringify(),
                    easing: Chartist.Svg.Easing.easeOutQuint
                }
            });
        }
        else if (data.type === 'label') {
            data.element.animate({

                opacity: {
                    begin: 500,
                    dur: 2000,
                    from: 0.8,
                    to: 0.8,
                    easing: Chartist.Svg.Easing.easeOutQuint
                }
            });
        }
    };
}
