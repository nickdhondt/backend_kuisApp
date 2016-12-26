import {Component, OnInit} from "@angular/core";
import {ApiService} from "../../../../service/api.service";
import {AuthService} from "../../../../auth/services/auth.service";

@Component({
    selector: 'app-todolist',
    templateUrl: './todolist.component.html',
    styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

    private tasksTodo: any[];

    constructor(private apiService: ApiService, private auth: AuthService) {
        this.getTasksTodo();
    }

    ngOnInit() {
    }

    private getTasksTodo(): void {

        this.auth.token
            .then((token) => {

                this.apiService
                    .getTaskstodobyhousehold(token, 37, 7)
                    .subscribe(
                        (data: any[]) => {
                            this.tasksTodo = data;
                            console.log(data)
                        }
                        ,
                        error => console.log(error),
                        () => console.log('Get all Items complete'));

            })
            .catch((msg) => {
                console.log('no token: ' + msg);
            });


    }

}
