import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter,
    trigger,
    state,
    style,
    transition,
    animate
} from "@angular/core";
import {Task} from "../../../../../models/task.model";
import * as moment from "moment";
import {User} from "../../../../../models/user.model";
import {ApiService} from "../../../../../service/api.service";


@Component({
    selector: 'app-tasktodo-row',
    templateUrl: './tasktodo-row.component.html',
    styleUrls: ['./tasktodo-row.component.scss'],
    animations: [
        trigger('visibleState', [

            state('finished', style({
                transform: 'translateX(-50%) scale(0)'
                ,
            })),
            state('canceled', style({
                transform: 'translateX(50%) scale(0)'
            })),

            transition('* => finished', [animate('300ms ease-out')]),
            transition('* => canceled', [animate('300ms ease-out')])
        ])
    ]
})
export class TasktodoRowComponent implements OnInit {

    @Input() task: Task;
    @Input() user: User;
    @Output() showDetail = new EventEmitter();
    @Output() finish = new EventEmitter();
    @Output() cancel = new EventEmitter();

    state: string;

    showDetailClick() {
        this.showDetail.emit(this.task);
    }

    finishClick() {
        this.state = 'finished';
        this.finish.emit(this.task);
        // console.log("test");
        this.apiService.addFinishedTask(this.task.id,true,this.user.uid,"2016-11-06" );
        // this.apiService.addFinishedTask(this.task.name, this.task.id).subscribe((ack)=>{});
    }

    cancelClick() {
        this.state = 'canceled';
        this.cancel.emit(this.task);
    }

    constructor(private apiService:ApiService) {
    }

    ngOnInit() {
    }

    get dateDiff(): number {

        return Math.ceil(moment.duration(moment(this.task.dueDate).diff(moment())).asDays());

    }

}
