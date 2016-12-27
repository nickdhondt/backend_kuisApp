import {Component} from "@angular/core";
import {AuthService} from "../../auth/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  user:string;

  constructor(private auth:AuthService, private router:Router) {
    this.user = auth.authState.auth.displayName;
  }


  logout(){
    this.auth.logout();
  }

    // getToken(){
    //   this.auth.token
    //       .then((token)=>{console.log('token app: ' + token);})
    //       .catch((msg)=>{console.log('no token: ' + msg);});
    // }

    slideOut() {
        document.getElementById("nav-mobile").style.transform = "translateX(0px)";
    }
}
