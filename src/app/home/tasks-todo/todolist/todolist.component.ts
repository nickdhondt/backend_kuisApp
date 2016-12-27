import {Component, OnInit, ViewContainerRef} from "@angular/core";
import {ApiService} from "../../../../service/api.service";
import {Task} from "../../../../models/task.model";
import {Overlay} from "angular2-modal";
import {Modal} from "angular2-modal/plugins/bootstrap";

@Component({
    selector: 'app-todolist',
    templateUrl: './todolist.component.html',
    styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

    tasksTodo: Task[];

    constructor(private apiService: ApiService, public modal: Modal, overlay: Overlay, vcRef: ViewContainerRef) {
        overlay.defaultViewContainer = vcRef;
    }

    ngOnInit() {
        this.getTasksTodo();
    }

    private getTasksTodo(): void {

        this.apiService
            .getTaskstodobyhousehold()
            .subscribe(
                data => this.tasksTodo = data.sort((t1, t2) => {
                    if (t1.dueDate > t2.dueDate) return 1;
                    if (t1.dueDate < t2.dueDate) return -1;
                    return 0;
                }),
                error => console.log(error));
    }

    showDetail() {
        //alert("detail popup van de taak (geen echte popup hé!)")
        this.modal
            .prompt()
            .size('lg')
            .title('Task detail')
            .body(`
    
                    <h4>Alert is a classic (title/body/footer) 1 button modal window that 
            does not block.</h4>
            <b>Configuration:</b>
            <ul>
                <li>Non blocking (click anywhere outside to dismiss)</li>
                <li>Size large</li>
                <li>Dismissed with default keyboard key (ESC)</li>
                <li>Close wth button click</li>
                <li>HTML content</li>
            </ul>
    
                `)
            .open();
    }
}
