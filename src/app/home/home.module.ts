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
import {ApiService} from "../../service/api.service";
import {Contract} from "../../contract";
import {CommonModule} from "@angular/common";
import {TodolistComponent} from "./tasks-todo/todolist/todolist.component";
import { ChatComponent } from './chat/chat.component';
import { MessageListComponent } from './chat/message-list/message-list.component';
import { MessageFormComponent } from './chat/message-form/message-form.component';
import { MessageItemComponent } from './chat/message-item/message-item.component';

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
        MessageItemComponent
    ],
    imports: [
        RouterModule, AppRoutingModule, CommonModule
    ],
    providers: [AuthService, ApiService, Contract],
})

export class HomeModule { }