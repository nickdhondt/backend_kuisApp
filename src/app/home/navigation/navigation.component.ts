import {Component, OnInit} from "@angular/core";
import {AuthService} from "../../../auth/services/auth.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

    user: firebase.User;



  ngOnInit() {
  }
  constructor(private auth:AuthService, private router:Router) {
      this.user = auth.authState.auth;
  }

  logout(){
    this.auth.logout();
  }

}
