import {Component, OnInit, Input, trigger, animate, style, transition, EventEmitter, Output} from "@angular/core";
import {PlatformLocation} from "@angular/common";

@Component({
    selector: 'app-about-component',
    templateUrl: './about-component.component.html',
    styleUrls: ['./about-component.component.scss'],
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
export class AboutComponentComponent implements OnInit {
    @Input() visible: boolean;
    @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(private location:PlatformLocation) {
        location.onPopState((event)=>{
            this.back();
        })
    }

    back(){
        this.visible = false;
        this.visibleChange.emit(this.visible);
    }
    close() {

        let stateObj = { foo: history.state.foo };
        history.replaceState(stateObj, "back", history.state.foo);

        this.back();
    }

    ngOnInit() {
        console.log(this.visible);
    }

}
