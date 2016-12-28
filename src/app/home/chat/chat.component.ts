import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../auth/services/auth.service";
import {Router} from "@angular/router";
import {Household} from "../../../models/household.model";
import {User} from "../../../models/user.model";
import {ApiService} from "../../../service/api.service";
import {isUndefined} from 'util';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {


  household : Household = new Household();

  constructor (private apiService: ApiService){

  }

  ngOnInit() {
    this.getHousehold();
  }

  private getHousehold():void{

    this.apiService
        .getHousehold()
        .subscribe(
            data => {



              if (!isUndefined(data.users)) {
                data.users.sort((a: User, b: User) => {
                  if (a.score < b.score) return 1;
                  if (b.score < a.score) return -1;
                  return 0;
                });
                this.household = data;
              }
              else {

              }

            },
//test
            error => console.log("error household " + error)
        );
  }

}
