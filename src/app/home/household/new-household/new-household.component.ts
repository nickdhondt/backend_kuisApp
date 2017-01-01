import {Component, OnInit, EventEmitter,style,trigger,transition,animate} from '@angular/core';
import {Input, Output} from "@angular/core/src/metadata/directives";

@Component({
  selector: 'app-new-household',
  templateUrl: './new-household.component.html',
  styleUrls: ['./new-household.component.scss'],
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
export class NewHouseholdComponent implements OnInit {

  private householdName:string="";
  @Input() visible:boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }
  close()
  {
    this.visible=false;
    this.visibleChange.emit(this.visible);
  }
  create(){
    if(this.householdName){

      //api call om household aan te maken
      //Emitten van nieuwe household naar overview
      //afsluiten van de dialog

    }else {
      console.log("no name")
    }
  }
}
