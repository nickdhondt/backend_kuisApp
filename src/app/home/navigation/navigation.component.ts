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
    private aboutVisible:Boolean = false;



  ngOnInit() {
  }

  openAbout(event) {
      this.aboutVisible = !this.aboutVisible;
      event.preventDefault();

      let stateObj = { foo: this.router.url };
      history.pushState(stateObj, "popup", "about");

  }

  constructor(private auth:AuthService, private router:Router) {
      this.user = auth.authState.auth;
  }

  logout(){
    this.auth.logout();
  }

}
