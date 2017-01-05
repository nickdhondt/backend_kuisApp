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
import {NewAwardComponent} from "./household-overview/award/new-award/new-award.component";
import {SortUsersPipe} from "../../pipe/sort-users.pipe";
import {NewHouseholdComponent} from "./household/new-household/new-household.component";
import {JoinHouseholdComponent} from "./household/join-household/join-household.component";
import {JoinHouseholdDetailComponent} from "./household/join-household-detail/join-household-detail.component";
import {ChartsComponent} from "./household/charts/charts.component";
import {ChartistModule} from "angular2-chartist";
import {FinishedBarComponent} from "./household/charts/finished-bar/finished-bar.component";
import {ContributionDonutComponent} from "./household/charts/contribution-donut/contribution-donut.component";
import {EvolutionLineComponent} from "./household/charts/evolution-line/evolution-line.component";
import {TasksDonutComponent} from "./household/charts/tasks-donut/tasks-donut.component";
import {AboutComponentComponent} from "./navigation/about-component/about-component.component";
import {LeaveHouseholdComponent} from "./household/leave-household/leave-household.component";
import {EditHouseholdComponent} from "./household/edit-household/edit-household.component";
import {CancelOKdialogComponent} from "./cancel-okdialog/cancel-okdialog.component";


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
        NewAwardComponent,
        NewHouseholdComponent,
        JoinHouseholdComponent,
        JoinHouseholdDetailComponent,
        ChartsComponent,
        FinishedBarComponent,
        ContributionDonutComponent,
        EvolutionLineComponent,
        TasksDonutComponent,
        AboutComponentComponent,
        LeaveHouseholdComponent,
        EditHouseholdComponent,
        CancelOKdialogComponent,

    ],
    imports: [
        RouterModule, AppRoutingModule, CommonModule, FormsModule, ChartistModule
    ],
    providers: [AuthService, ApiService, Contract],
    bootstrap: [MessageListComponent, MessageFormComponent, MessageItemComponent]
})

export class HomeModule {
}
