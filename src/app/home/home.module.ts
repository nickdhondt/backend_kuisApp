import {NgModule} from "@angular/core";
import {HomeComponent} from "./home.component";
import {AuthService} from "../../auth/services/auth.service";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "../app.routes";
import {TasksTodoComponent} from "./tasks-todo/tasks-todo.component";
import {AllTasksComponent} from "./all-tasks/all-tasks.component";
import {HouseholdComponent} from "./household/household.component";
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    declarations: [
        HomeComponent,
        TasksTodoComponent,
        AllTasksComponent,
        HouseholdComponent,
        NavigationComponent,
        HeaderComponent
    ],
    imports: [
        RouterModule, AppRoutingModule
    ],
    providers: [AuthService],
})

export class HomeModule { }