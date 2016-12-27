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

}
