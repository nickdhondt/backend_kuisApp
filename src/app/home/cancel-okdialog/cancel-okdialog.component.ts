import {Component, OnInit, trigger, transition, style, animate, Output, Input, EventEmitter} from "@angular/core";

@Component({
  selector: 'app-cancel-okdialog',
  templateUrl: './cancel-okdialog.component.html',
  styleUrls: ['./cancel-okdialog.component.scss'],
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
export class CancelOKdialogComponent implements OnInit {

    @Input() visible:boolean;
    @Output() result:EventEmitter<boolean>= new EventEmitter<boolean>();
    @Output() visibleChange:EventEmitter<boolean>= new EventEmitter<boolean>();
    @Input() title:string;
    @Input() message:string;

    constructor() { }


  ngOnInit() {
  }

  OK(){
        this.result.emit(true);
        this.close();
  }
  cancel(){
      this.result.emit(false);
      this.close();
  }
    close(){
        this.visible=false;
        this.visibleChange.emit(this.visible);
    }
}
