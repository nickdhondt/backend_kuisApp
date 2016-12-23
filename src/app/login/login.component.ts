import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../auth/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  constructor(private auth:AuthService, private router:Router){
    this.title = "Please login"
  }

  title:string;

  loginFacebook(): void{

    this.title = "logging in with facebook";
    this.auth.loginFacebook()
        .then(()=> {
          this.router.navigate(['home']);
        })
        .catch((error)=>{
          this.title = "" + error;
        })

  }
  loginGoogle(): void{

    this.title = "logging in with google";
    this.auth.loginGoogle()
        .then(()=>{
          this.router.navigate(['home']);
        })
        .catch((error)=>{
          this.title = "" + error;
        });
  }
}
