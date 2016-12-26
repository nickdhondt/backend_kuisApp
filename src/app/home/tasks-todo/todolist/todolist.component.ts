import {Component, OnInit} from "@angular/core";
import {ApiService} from "../../../../service/api.service";

@Component({
    selector: 'app-todolist',
    templateUrl: './todolist.component.html',
    styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

    tasksTodo;

    constructor(private apiService: ApiService) {
    }

    ngOnInit() {
        this.getTasksTodo();
    }

    private getTasksTodo(): void {

        this.apiService
            .getTaskstodobyhousehold(37, 7)
            .subscribe(
                data => {
                    console.log(data);
                    this.tasksTodo = data;
                }
                ,
                error => console.log(error));
    }
}
