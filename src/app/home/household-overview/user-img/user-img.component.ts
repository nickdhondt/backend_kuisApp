import {Component, OnInit, Input} from "@angular/core";
import {User} from "../../../../models/user.model";

@Component({
    selector: 'app-user-img',
    templateUrl: './user-img.component.html',
    styleUrls: ['./user-img.component.css']
})
export class UserImgComponent implements OnInit {


    @Input() user: User;
    @Input() index: number;

    constructor() {
    }

    ngOnInit() {

    }

}
