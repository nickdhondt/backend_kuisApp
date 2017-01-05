import {Component, OnInit, EventEmitter, style, trigger, transition, animate} from "@angular/core";
import {Input, Output} from "@angular/core/src/metadata/directives";
import {ApiService} from "../../../../service/api.service";

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
    @Output() userReceived: EventEmitter<any> = new EventEmitter();

  constructor(private apiService:ApiService) { }

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
        this.apiService.addHousehold(this.householdName).subscribe(
            household => {

                //console.log(household);

                this.apiService.addUsertoHousehold(household.id).subscribe(
                    user => {

                        this.userReceived.emit(user);

                    },
                    error => {}
                )

            },
            error => {}
        );
      //current user toevoegen aan dit household

      //Emitten van nieuwe household naar overview
      //afsluiten van de dialog
      this.visible=false;
      this.visibleChange.emit(this.visible);

    }else {
      //console.log("no name")
    }
  }
}
