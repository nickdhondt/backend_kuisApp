import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../auth/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  user:string;
  photoUrl:string;
  uid: string;
  constructor(private auth:AuthService, private router:Router) {
    this.user = auth.authState.auth.displayName;
    this.photoUrl = auth.authState.auth.photoURL;
    this.uid = auth.authState.auth.uid
  }

  ngOnInit() {
  }

}
