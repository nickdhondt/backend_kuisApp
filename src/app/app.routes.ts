import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "../auth/guard/auth.guard";
import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {UnauthGuard} from "../auth/guard/unauth.guard";
import {TasksTodoComponent} from "./home/tasks-todo/tasks-todo.component";
import {AllTasksComponent} from "./home/all-tasks/all-tasks.component";
import {HouseholdComponent} from "./home/household/household.component";
import {NotFoundComponent} from "./not-found/not-found.component";


const routes: Routes = [
    {path: '', component: LoginComponent, canActivate: [UnauthGuard]},
    {
        path: 'home',
        canActivate: [AuthGuard],
        component: HomeComponent,
        children: [
            {path: '', component: TasksTodoComponent},
            {path: 'tasks', component: AllTasksComponent},
            {path: 'household', component: HouseholdComponent},
            {path: '**', redirectTo: '/404'}
        ]
    },
    {path: '404', component: NotFoundComponent},
    {path: '**', redirectTo: '/404'},

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}