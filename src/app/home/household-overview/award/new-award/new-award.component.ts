import {Component, OnInit, Input, trigger, transition, style, animate, Output, EventEmitter} from "@angular/core";
import {ApiService} from "../../../../../service/api.service";

@Component({
    selector: 'app-new-award',
    templateUrl: './new-award.component.html',
    styleUrls: ['./new-award.component.scss'],
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
export class NewAwardComponent implements OnInit {
    @Input() visible: boolean;
    @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() awardAdded: EventEmitter<any> = new EventEmitter();

    private name: String = "";
    private description: String = "";

    constructor(private apiService: ApiService) {
    }

    ngOnInit() {
    }

    close() {
        this.visible = false;
        this.visibleChange.emit(this.visible);
    }

    set() {
        if (this.name !== "") {
            console.log("test");
            this.apiService.setAward(this.name, this.description).subscribe((award) => {
                console.log("received");
                this.awardAdded.emit(award);
                this.close();
                this.name = "";
                this.description = "";
            });
        }
    }
}
