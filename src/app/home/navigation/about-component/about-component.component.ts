import {Component, OnInit, Input, trigger, animate, style, transition, EventEmitter, Output} from '@angular/core';

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

    constructor() {
    }

    close() {
        this.visible = false;
        this.visibleChange.emit(this.visible);
    }

    ngOnInit() {
        console.log(this.visible);
    }

}
