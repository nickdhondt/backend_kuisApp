import {Component, OnInit, Input, trigger, animate, transition, style, EventEmitter} from '@angular/core';
import {Output} from "@angular/core/src/metadata/directives";
import {ApiService} from "../../../../service/api.service";

@Component({
  selector: 'app-join-household',
  templateUrl: './join-household.component.html',
  styleUrls: ['./join-household.component.scss'],
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
export class JoinHouseholdComponent implements OnInit {
  private memberemail:string ="";
  @Input() visible:boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private apiservice:ApiService) { }

  ngOnInit() {
  }

  close(){
    this.visible=false;
    this.visibleChange.emit(this.visible)
  }
  save(){
    if(this.memberemail){
      console.log(this.memberemail);
      this.apiservice.get
    }

  }

}
