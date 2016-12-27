import {Component, OnInit} from "@angular/core";
import {AuthService} from "../../../auth/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  user:string;

  ngOnInit() {
  }
  constructor(private auth:AuthService, private router:Router) {

  }


  logout(){
    this.auth.logout();
  }

  slideOut() {
    document.getElementById("slide-out").style.transform = "translateX(0px)";
  }

}
