import {Component, OnInit, trigger, transition, style, animate, Input, Output, EventEmitter} from "@angular/core";
import {User} from "../../../../models/user.model";

@Component({
    selector: 'app-user-detail',
    templateUrl: './user-detail.component.html',
    styleUrls: ['./user-detail.component.css'],
    animations: [
        trigger('dialog', [
            transition('void => *', [
                style({transform: 'scale3d(.3, .3, .3)'}),
                animate(100)
            ]),
            transition('* => void', [
                animate(100, style({transform: 'scale3d(.0, .0, .0)'}))
            ])
        ])
    ]
})
export class UserDetailComponent implements OnInit {

    @Input() user: User;
    @Input() closable = true;
    @Input() visible: boolean;
    @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() {
    }

    ngOnInit() {
    }

    close() {
        this.visible = false;
        this.visibleChange.emit(this.visible);
    }
    save(){
        //Code om update-user uit te voeren
        this.visible = false;
        this.visibleChange.emit(this.visible);

    }
}
