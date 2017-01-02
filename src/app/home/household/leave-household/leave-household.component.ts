import {Component, OnInit, Input, Output, EventEmitter, trigger,transition,style,animate} from '@angular/core';
import {Household} from "../../../../models/household.model";

@Component({
  selector: 'app-leave-household',
  templateUrl: './leave-household.component.html',
  styleUrls: ['./leave-household.component.scss'],
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
export class LeaveHouseholdComponent implements OnInit {


  @Input() visible:boolean;
  @Input() household:Household;
  @Output() visibleChange:EventEmitter<boolean>= new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  close(){
    this.visible=false;
    this.visibleChange.emit(this.visible);
  }



}
