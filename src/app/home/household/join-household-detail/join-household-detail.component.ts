import {Component, OnInit, transition, trigger, style, animate, EventEmitter, NgZone} from "@angular/core";
import {Input, Output} from "@angular/core/src/metadata/directives";
import {Household} from "../../../../models/household.model";
import {ApiService} from "../../../../service/api.service";
import {AuthService} from "../../../../auth/services/auth.service";
import {SocketService} from "../../../../service/socket.service";
import {UpdateAnnouncementHistoryService} from "../../../../service/update-announcement-history.service";

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

  constructor(private apiService:ApiService,private auth:AuthService,private _ngZone:NgZone, private socketService:SocketService, private updateAnnouncementHistoryService:UpdateAnnouncementHistoryService) {
    this.user = auth.authState.auth;
  }

  @Input() household:Household;
  @Input() visible:boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() householdjoined:EventEmitter<any>= new EventEmitter();
  private user:firebase.User;

  ngOnInit() {
  }

  close(){
    this.visible=false;
    this.visibleChange.emit(this.visible);
  }

  join(){
    //console.log("Join Household");

      this.apiService.addUsertoHousehold(this.household.id)
          .subscribe(
              user => {
                  this.updateAnnouncementHistoryService.updateHistoryNeeded();
                  this.socketService.resubscribe();
                  this.visible = false;
                  this.visibleChange.emit(this.visible);
                  this.householdjoined.emit(user);

              },
              error =>{}
          );

  }

}
