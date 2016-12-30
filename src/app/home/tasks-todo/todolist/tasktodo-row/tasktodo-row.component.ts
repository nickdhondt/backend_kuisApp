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
import * as firebase from 'firebase';
import {SocketService} from "../../../../../service/socket.service";
import {take} from "rxjs/operator/take";


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
    private isDestroyed:Boolean = false;

    showDetailClick() {
        this.showDetail.emit(this.task);
    }

    finishClick() {
        this.state = 'finished';
        this.isDestroyed = true;
        this.finish.emit(this.task);
        let userUid:string = firebase.auth().currentUser.uid;

        this.apiService.addFinishedTask(this.task.id, true, userUid, moment().format("YYYY-MM-DD HH:mm:ss"));
    }

    cancelClick() {
        this.state = 'canceled';
        this.isDestroyed = true;
        this.cancel.emit(this.task);

        let userUid:string = firebase.auth().currentUser.uid;

        this.apiService.addFinishedTask(this.task.id, false, userUid, moment().format("YYYY-MM-DD HH:mm:ss"));
    }

    constructor(private apiService:ApiService, private socketService:SocketService) {
    }

    ngOnInit() {
        this.socketService.taskUpdates().subscribe((data) => {
            if (!this.isDestroyed && data.taskID === this.task.id) {
                console.log(data.done);
                console.log(data.taskID + ", " + this.task.id);
                if (data.done) {
                    this.state = "finished";
                    this.finish.emit(this.task);
                } else {
                    this.state = "canceled";
                    this.cancel.emit(this.task);
                }
            }
        })
    }

    get dateDiff(): number {

        return Math.ceil(moment.duration(moment(this.task.dueDate).diff(moment())).asDays());

    }

}
