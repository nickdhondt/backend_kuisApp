import {Component, OnInit, ViewContainerRef} from "@angular/core";
import {ApiService} from "../../../../service/api.service";
import {Modal, Overlay} from "angular2-modal";
import {Task} from "../../../../models/task.model";

@Component({
    selector: 'app-tasklist',
    templateUrl: './tasklist.component.html',
    styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {

    tasks: Task[];

    constructor(private apiService: ApiService, public modal: Modal, overlay: Overlay, vcRef: ViewContainerRef) {
        overlay.defaultViewContainer = vcRef;
    }

    ngOnInit() {
        this.getTasks();
    }

    private getTasks(): void {

        this.apiService
            .getTasks()
            .subscribe(
                data => this.tasks = data.sort((t1, t2) => {
                    if (t1.period > t2.period) return 1;
                    if (t1.period < t2.period) return -1;
                    return 0;
                }),
                error => console.log(error));
    }

}
