import {Component, OnInit, Output, EventEmitter,trigger,transition,style,animate} from '@angular/core';
import {Input} from "@angular/core/src/metadata/directives";
import {Household} from "../../../../models/household.model";
import {User} from "../../../../models/user.model";
import {ApiService} from "../../../../service/api.service";

@Component({
  selector: 'app-edit-household',
  templateUrl: './edit-household.component.html',
  styleUrls: ['./edit-household.component.scss'],
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
export class EditHouseholdComponent implements OnInit {

  @Input() visible:boolean;
  @Input() household:Household;

  @Output() visibleChange:EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private apiService:ApiService) { }

  ngOnInit() {

  }

  save(){

    this.apiService.updateHousehold(this.household).subscribe((household)=>{this.close()});
  }

  close(){
    this.visible=false;
    this.visibleChange.emit(this.visible);
  }




}
