import {Component, OnInit, transition, trigger, style, animate, EventEmitter} from '@angular/core';
import {Input, Output} from "@angular/core/src/metadata/directives";
import {Household} from "../../../../models/household.model";

@Component({
  selector: 'app-join-household-detail',
  templateUrl: './join-household-detail.component.html',
  styleUrls: ['./join-household-detail.component.scss'],
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
export class JoinHouseholdDetailComponent implements OnInit {

  constructor() { }

  @Input() household:Household;
  @Input() visible:boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit() {
  }

  close(){
    this.visible=false;
    this.visibleChange.emit(this.visible);
  }

}
