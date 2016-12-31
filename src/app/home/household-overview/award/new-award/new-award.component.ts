import {Component, OnInit, trigger, transition, style, animate, EventEmitter} from '@angular/core';
import {Input, Output} from "@angular/core/src/metadata/directives";
import {Award} from "../../../../../models/award.model";
import * as firebase from 'firebase';
import * as moment from "moment";
import {User} from "../../../../../models/user.model";
import {ApiService} from "../../../../../service/api.service";
import {AuthService} from "../../../../../auth/services/auth.service";

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

  awardname:string;
  description:string;


  showDialogNewAward:boolean=false;
  @Input() visible:boolean;
  @Output() visibleChange: EventEmitter<boolean>= new EventEmitter<boolean>();
  constructor(private apiservice:ApiService,private authservice:AuthService) { }

  ngOnInit() {
  }
  close(){
    this.visible = false;
    this.visibleChange.emit(this.visible);
    this.description="";
    this.awardname="";

  }
  save(){
    this.visible = false;
    this.visibleChange.emit(this.visible);




    // this.apiservice.addAward(this.description,this.awardname,moment().format("YYYY-MM-DD HH:mm:ss"),null,33,37)


  }

}
