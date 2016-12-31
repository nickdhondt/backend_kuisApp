import {NgModule} from "@angular/core";
import {HomeComponent} from "./home.component";
import {AuthService} from "../../auth/services/auth.service";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "../app.routes";
import {TasksTodoComponent} from "./tasks-todo/tasks-todo.component";
import {AllTasksComponent} from "./all-tasks/all-tasks.component";
import {HouseholdComponent} from "./household/household.component";
import {NavigationComponent} from "./navigation/navigation.component";
import {HeaderComponent} from "./header/header.component";
import {ApiService} from "../../service/api.service";
import {Contract} from "../../contract";
import {CommonModule} from "@angular/common";
import {TodolistComponent} from "./tasks-todo/todolist/todolist.component";
import {ChatComponent} from "./chat/chat.component";
import {MessageListComponent} from "./chat/message-list/message-list.component";
import {MessageFormComponent} from "./chat/message-form/message-form.component";
import {MessageItemComponent} from "./chat/message-item/message-item.component";
import {FormsModule} from "@angular/forms";
import {MaterializeDirective} from "angular2-materialize";
import {TasklistComponent} from "./all-tasks/tasklist/tasklist.component";
import {TaskdetailComponent} from "./taskdetail/taskdetail.component";
import {HouseholdOverviewComponent} from "./household-overview/household-overview.component";
import {LoaderSmallComponent} from "../loader-small/loader-small.component";
import {UserImgComponent} from "./household-overview/user-img/user-img.component";
import {UserDetailComponent} from "./household-overview/user-detail/user-detail.component";
import {AwardComponent} from "./household-overview/award/award.component";
import {TasksFilterPipe} from "../../pipe/tasks-filter.pipe";
import {FooterComponent} from "./footer/footer.component";
import {TasktodoRowComponent} from "./tasks-todo/todolist/tasktodo-row/tasktodo-row.component";
import {SortPipe} from "../../pipe/sort.pipe";
import {TaskRowComponent} from "./all-tasks/tasklist/task-row/task-row.component";
import {AwardDetailComponent} from "./household-overview/award/award-detail/award-detail.component";
import {SortUsersPipe} from "../../pipe/sort-users.pipe";
import {NewAwardComponent} from "./household-overview/award/new-award/new-award.component";


@NgModule({
    declarations: [
        HomeComponent,
        TasksTodoComponent,
        AllTasksComponent,
        HouseholdComponent,
        TodolistComponent,
        HouseholdComponent,
        NavigationComponent,
        HeaderComponent,
        ChatComponent,
        MessageListComponent,
        MessageFormComponent,
        MessageItemComponent,
        MaterializeDirective,
        TasklistComponent,
        TaskdetailComponent,
        HouseholdOverviewComponent,
        LoaderSmallComponent,
        UserImgComponent,
        UserDetailComponent,
        AwardComponent,
        TasksFilterPipe,
        SortPipe,
        FooterComponent,
        TasktodoRowComponent,
        TaskRowComponent,
        AwardDetailComponent,
        SortUsersPipe,
        AwardDetailComponent,
        NewAwardComponent
    ],
    imports: [
        RouterModule, AppRoutingModule, CommonModule, FormsModule
    ],
    providers: [AuthService, ApiService, Contract],
    bootstrap: [MessageListComponent, MessageFormComponent, MessageItemComponent]
})

export class HomeModule {
}
