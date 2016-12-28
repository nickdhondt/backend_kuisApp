import {Component} from "@angular/core";
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

            this.auth.addUser().subscribe(
                data => this.router.navigate(['home']),
                error => console.log(error));

        })
        .catch((error)=>{
          this.title = "" + error;
        })

  }
  loginGoogle(): void{

    this.title = "logging in with google";
    this.auth.loginGoogle()
        .then(() => {

            this.auth.addUser().subscribe(
                data => this.router.navigate(['home']),
                error => console.log(error));

        })
        .catch((error)=>{
            this.title = "" + error;
        })
  }
}
