import {Component, OnInit, Input} from "@angular/core";
import {ChartType, ChartEvent, ChartOptions} from "angular2-chartist";
import * as Chartist from "chartist";
import {ApiService} from "../../../../../service/api.service";
import {Household} from "../../../../../models/household.model";
import IChartistAnimations = Chartist.IChartistAnimations;
require('chartist-plugin-legend');

@Component({
    selector: 'app-contribution-donut',
    templateUrl: './contribution-donut.component.html',
    styleUrls: ['./contribution-donut.component.scss']
})
export class ContributionDonutComponent implements OnInit {

    type: ChartType;
    data: any = {
        "labels": [],
        "series": []
    };
    options: ChartOptions;
    events: ChartEvent;

    @Input() household: Household;


    constructor(private apiService: ApiService) {

        this.events = {
            "draw": this.draw
        };
        this.options = {
            donut: true,
            showLabel: true,
            plugins: [Chartist.plugins.legend()],
            donutWidth: 30,
            labelOffset: 30,
            labelDirection: 'explode',
            chartPadding: 20,
        };
        this.type = 'Pie';
    }

    ngOnInit() {
        this.getContributions();
    }

    draw = function (data) {
        if (data.type === 'slice') {
            // Get the total path length in order to use for dash array animation
            let pathLength = data.element._node.getTotalLength();

            // Set a dasharray that matches the path length as prerequisite to animate dashoffset
            data.element.attr({
                'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
            });

            // Create animation definition while also assigning an ID to the animation for later sync usage
            let animationDefinition: IChartistAnimations = {
                'stroke-dashoffset': {
                    id: 'anim' + data.index,
                    dur: 1000,
                    from: -pathLength + 'px',
                    to: '0px',
                    easing: Chartist.Svg.Easing.easeOutQuint,
                    // We need to use `fill: 'freeze'` otherwise our animation will fall back to initial (not visible)
                    fill: 'freeze'
                }
            };

            // If this was not the first slice, we need to time the animation so that it uses the end sync event of the previous animation
            if (data.index !== 0) {
                animationDefinition['stroke-dashoffset'].begin = 'anim' + (data.index - 1) + '.end';
            }

            // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
            data.element.attr({
                'stroke-dashoffset': -pathLength + 'px'
            });

            // We can't use guided mode as the animations need to rely on setting begin manually
            // See http://gionkunz.github.io/chartist-js/api-documentation.html#chartistsvg-function-animate
            data.element.animate(animationDefinition, false);
        }
    };

    private getContributions() {
        this.apiService.getContributions().subscribe(
            data => {

                let result = {"labels": [], "series": []};

                data.sort((d1, d2) => {
                    //console.log(d1._id);
                    if (d1._id > d2._id) return -1;
                    if (d1._id < d2._id) return 1;
                    return 0;
                });
                data.forEach((res) => {
                    result["labels"].push(this.findUser(res._id));
                    result["series"].push(res.count);
                });

                this.data = result;
            },
            error => {}
        )
    }

    private findUser(id: number) {
        for (let user in this.household.users)
            if (this.household.users[user].id == id)
                return this.household.users[user].name;

        return "inactive member"
    }
}
