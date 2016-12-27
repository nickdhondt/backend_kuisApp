import {Component, OnInit} from "@angular/core";
import {ApiService} from "../../../service/api.service";
import {AuthService} from "../../../auth/services/auth.service";

@Component({
  selector: 'app-tasks-todo',
  templateUrl: './tasks-todo.component.html',
  styleUrls: ['./tasks-todo.component.css']
})
export class TasksTodoComponent implements OnInit {

    constructor(private apiService: ApiService, private auth: AuthService) {

    }

  ngOnInit() {

  }


}
