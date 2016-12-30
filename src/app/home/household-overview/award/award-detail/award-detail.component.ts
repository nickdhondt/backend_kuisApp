import {Component, OnInit, Input, Output, EventEmitter,trigger,transition,style,animate} from '@angular/core';
import {Award} from "../../../../../models/award.model";
import {isBoolean} from "util";
import {ApiService} from "../../../../../service/api.service";
import {User} from "../../../../../models/user.model";

@Component({
  selector: 'app-award-detail',
  templateUrl: './award-detail.component.html',
  styleUrls: ['./award-detail.component.scss'],
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
export class AwardDetailComponent implements OnInit {

  @Input() award: Award;
  @Input() user : User
  @Input() visible:boolean;
  @Output() visibleChange: EventEmitter<boolean>= new EventEmitter<boolean>();
  constructor() {}

  ngOnInit() {

  }

  close(){
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }

}
