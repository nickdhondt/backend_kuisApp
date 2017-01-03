import {Component, OnInit, trigger, transition, style, animate, Input, Output, EventEmitter} from "@angular/core";
import {User} from "../../../../models/user.model";
import {ApiService} from "../../../../service/api.service";
import {AuthService} from "../../../../auth/services/auth.service";

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
    currentUser: String;
    @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(private apiService: ApiService, private auth: AuthService) {
        this.currentUser = auth.uid;
    }

    ngOnInit() {
    }

    close() {
        this.visible = false;
        this.visibleChange.emit(this.visible);
    }
    save(){
        //Code om update-user uit te voeren
        this.apiService.updateUser(this.user).subscribe((user)=>{console.log(user); this.close()})
    }
}
