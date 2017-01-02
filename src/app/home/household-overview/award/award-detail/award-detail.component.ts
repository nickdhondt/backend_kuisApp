import {Component, OnInit, Input, Output, EventEmitter, trigger, transition, style, animate} from "@angular/core";
import {Award} from "../../../../../models/award.model";
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
  @Input() user : User;
    //@Input() users: User[];
  @Input() visible:boolean;
  @Output() visibleChange: EventEmitter<boolean>= new EventEmitter<boolean>();
  constructor() {}


  ngOnInit() {

  }

    // private finduser(id:number){
    //   for(let u in this.users){
    //     if(this.user[u].id==id){
    //       console.log("creator found");
    //
    //       return this.user[u];
    //     }
    //     return new User();
    //   }
    // }
  close(){
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }

}
