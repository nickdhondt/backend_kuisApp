import {Component, OnInit, Input, Output, EventEmitter, trigger, transition, style, animate} from "@angular/core";
import {Household} from "../../../../models/household.model";
import {User} from "../../../../models/user.model";
import {ApiService} from "../../../../service/api.service";
import {SocketService} from "../../../../service/socket.service";

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
  @Input() user: User;
  @Output() visibleChange:EventEmitter<boolean>= new EventEmitter<boolean>();
  @Output() updatedUser: EventEmitter<any>=new EventEmitter();

  constructor(private apiService: ApiService, private socketService:SocketService) { }

  ngOnInit() {
  }

  close(){
    this.visible=false;
    this.visibleChange.emit(this.visible);
  }

  leave(){

      this.apiService.leaveHousehold(this.user.id).subscribe(
          user => {
              this.socketService.resubscribe();
              this.visible = false;
              this.visibleChange.emit(this.visible);
              this.updatedUser.emit(user);
              //console.log(user);
          },
          error => {}
      );


  }



}
