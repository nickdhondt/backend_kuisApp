import {Component, OnInit} from "@angular/core";
import {ApiService} from "../../../service/api.service";
import {User} from "../../../models/user.model";
import {UpdateTaskListService} from "../../../service/update-task-list.service";
import {Router} from "@angular/router";
import {Task} from "../../../models/task.model";

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.css']
})
export class AllTasksComponent implements OnInit {

    dialogVisible:Boolean = false;
    cancelOKVisible:Boolean = false;
    dialogMessage:String ="";
    dialogTitle:String = "";

    ngOnInit(): void {
        this.getUser();
    }

    user: User;
    loading: Boolean = true;

    constructor(private apiSevice: ApiService, private updateTaskListService:UpdateTaskListService, private router:Router) {
        updateTaskListService.listUpdated$.subscribe((data) => {
            this.getUser();
        })
    }

    getUser() {
        this.apiSevice
            .getEverything()
            .subscribe(
                data => {
                    this.user = data;
                    this.loading = false;
                },
                error => {}
            );
    }

    importedTasks;

    importTasks(){

        if(!this.user || !this.user.household) return;

        this.apiSevice.importTasks(true).subscribe(
            data=>{
                this.importedTasks = data;
                this.dialogMessage = "Do you want to import " + data.length + " tasks?";
                this.dialogTitle = "Please confirm";
                this.cancelOKVisible = true;
            },
            error => {}
        );

    }

    processDialogResult(result:boolean){

        if(result){

            this.apiSevice.addTasks(this.importedTasks).subscribe(
                data=>{
                    //console.log(this.user.household.tasks.length);
                    this.user.household.tasks = this.user.household.tasks.concat(data.map(d=>Task.makeTaskFromJSON(d)));
                    //console.log(this.user.household.tasks.length);
                },
                error => {}
            )
        }

    }
    showCreateTask(){
        this.dialogVisible=!this.dialogVisible;
        let stateObj = { foo: this.router.url };
        history.pushState(stateObj, "popup", "task");
    }

}
