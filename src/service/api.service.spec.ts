/* tslint:disable:no-unused-variable */
import {TestBed, inject} from "@angular/core/testing";
import {MockBackend, MockConnection} from "@angular/http/testing";
import {BaseRequestOptions, Http, XHRBackend, HttpModule, Response, ResponseOptions} from "@angular/http";
import "materialize-css";
import "angular2-materialize";
import {ApiService} from "./api.service";
import {AppComponent} from "../app/app.component";
import {Contract} from "../contract";
import {AuthService} from "../auth/services/auth.service";
import {AuthMethods, AngularFireModule} from "angularfire2";
import {LoginComponent} from "../app/login/login.component";
import {AuthGuard} from "../auth/guard/auth.guard";
import {Routes, RouterModule} from "@angular/router";
import {UnauthGuard} from "../auth/guard/unauth.guard";
import {HomeComponent} from "../app/home/home.component";
import {TasksTodoComponent} from "../app/home/tasks-todo/tasks-todo.component";
import {AllTasksComponent} from "../app/home/all-tasks/all-tasks.component";
import {HouseholdComponent} from "../app/home/household/household.component";
import {NavigationComponent} from "../app/home//navigation/navigation.component";
import {HeaderComponent} from "../app/home/header/header.component";
import {APP_BASE_HREF} from "@angular/common";
import {TodolistComponent} from "../app/home/tasks-todo/todolist/todolist.component";
import {ChatComponent} from "../app/home/chat/chat.component";
import {MessageListComponent} from "../app/home/chat/message-list/message-list.component";
import {MessageFormComponent} from "../app/home/chat/message-form/message-form.component";
import {MessageItemComponent} from "../app/home/chat/message-item/message-item.component";
import {MaterializeDirective} from "angular2-materialize";
import {TasklistComponent} from "../app/home/all-tasks/tasklist/tasklist.component";
import {TaskdetailComponent} from "../app/home/taskdetail/taskdetail.component";
import {HouseholdOverviewComponent} from "../app/home/household-overview/household-overview.component";
import {UserImgComponent} from "../app/home/household-overview/user-img/user-img.component";
import {UserDetailComponent} from "../app/home/household-overview/user-detail/user-detail.component";
import {AwardComponent} from "../app/home/household-overview/award/award.component";
import {TasksFilterPipe} from "../pipe/tasks-filter.pipe";
import {FooterComponent} from "../app/home/footer/footer.component";
import {TasktodoRowComponent} from "../app/home/tasks-todo/todolist/tasktodo-row/tasktodo-row.component";
import {SortPipe} from "../pipe/sort.pipe";
import {TaskRowComponent} from "../app/home/all-tasks/tasklist/task-row/task-row.component";
import {AwardDetailComponent} from "../app/home/household-overview/award/award-detail/award-detail.component";
import {NewAwardComponent} from "../app/home/household-overview/award/new-award/new-award.component";
import {SortUsersPipe} from "../pipe/sort-users.pipe";
import {NewHouseholdComponent} from "../app/home/household/new-household/new-household.component";
import {JoinHouseholdComponent} from "../app/home/household/join-household/join-household.component";
import {JoinHouseholdDetailComponent} from "../app/home/household/join-household-detail/join-household-detail.component";
import {ChartsComponent} from "../app/home/household/charts/charts.component";
import {FinishedBarComponent} from "../app/home/household/charts/finished-bar/finished-bar.component";
import {ContributionDonutComponent} from "../app/home/household/charts/contribution-donut/contribution-donut.component";
import {EvolutionLineComponent} from "../app/home/household/charts/evolution-line/evolution-line.component";
import {TasksDonutComponent} from "../app/home/household/charts/tasks-donut/tasks-donut.component";
import {AboutComponentComponent} from "../app/home/navigation/about-component/about-component.component";
import {LeaveHouseholdComponent} from "../app/home/household/leave-household/leave-household.component";
import {EditHouseholdComponent} from "../app/home/household/edit-household/edit-household.component";
import {CancelOKdialogComponent} from "../app/home/cancel-okdialog/cancel-okdialog.component";
import {NotFoundComponent} from "../app/not-found/not-found.component";
import {LoaderSmallComponent} from "../app/loader-small/loader-small.component";
import {FormsModule} from "@angular/forms";
import {ChartistModule} from "angular2-chartist";
import {Household} from "../models/household.model";


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

const myFirebaseConfig = {
    apiKey: "AIzaSyB_BRv8vUg4D0njciLkTNqGBEfZM4cNVlQ",
    authDomain: "kuisapp.firebaseapp.com",
    databaseURL: "https://kuisapp.firebaseio.com",
    storageBucket: "kuisapp.appspot.com"
};

const myFirebaseAuthConfig = {
    method: AuthMethods.Popup
};

describe('ApiService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ApiService, MockBackend, BaseRequestOptions, Contract, AuthService, { provide: APP_BASE_HREF, useValue: '/',Http, deps: [MockBackend, BaseRequestOptions],
                useFactory: (backend: XHRBackend, defaultOptions: BaseRequestOptions)=> {return new Http(backend, defaultOptions)}}],
            imports: [
                HttpModule,
                RouterModule,
                FormsModule,
                ChartistModule,
                AngularFireModule.initializeApp(myFirebaseConfig, myFirebaseAuthConfig),
                RouterModule.forRoot(routes)
            ],
            declarations: [
                AppComponent,
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
                LoginComponent,
                NotFoundComponent,
                LoaderSmallComponent
            ]
        });
        TestBed.compileComponents();
    });

    it('should be an observable and should give something back', inject([ApiService], (service: ApiService) => {
        expect(service).toBeTruthy();
        service.getContributions().subscribe((contributions)=>{
            expect(contributions.length).toBeGreaterThan(0);
        });
        service.getFinishedCanceledStats().subscribe((finishedCanceledTasks) =>{
            expect(finishedCanceledTasks.length).toBeGreaterThan(0);
        });
        service.getTaskStats().subscribe((taskStats) =>{
            expect(taskStats.length).toBeGreaterThan(0);
        });
    }));
    it('should be an observable and should give something back', inject([ApiService], (service: ApiService) => {
        service.getContributionEvolution().subscribe((contributionsEvolution)=>{
            expect(contributionsEvolution.length).toBeGreaterThan(0);
        });
        service.importTasks(false).subscribe((tasks)=>{
            expect(tasks.length).toBeGreaterThan(0);
        });
    }));
    it('user object to be defined', inject([ApiService], (service: ApiService) => {
        service.getEverything().subscribe((user)=>{
            expect(user.name).toBeDefined();
            expect(user.email).toBeDefined();
            expect(user.household).toBeDefined();
            expect(user.household_id).toBeDefined();
            expect(user.id).toBeDefined();
            expect(user.imgsrc).toBeDefined();
            expect(user.lname).toBeDefined();
            expect(user.phoneNumber).toBeDefined();
        });
    }));
    it('householdobject to be defined', inject([ApiService], (service: ApiService) => {
        service.getHouseholdbyEmail("mordicus_87@hotmail.com").subscribe((household) =>{
            expect(household.id).toBeDefined();
            expect(household.award).toBeDefined();
            expect(household.countFinishedAwards).toBeDefined();
            expect(household.countFinishedTasks).toBeDefined();
            expect(household.countTasks).toBeDefined();
            expect(household.countTotalScore).toBeDefined();
            expect(household.lastAward).toBeDefined();
            expect(household.lastAwardWonBy).toBeDefined();
            expect(household.mostAwardsWon).toBeDefined();
            expect(household.mostPopularTask).toBeDefined();
            expect(household.name).toBeDefined();
            expect(household.tasks).toBeDefined();
            expect(household.taskstodo).toBeDefined();
            expect(household.users).toBeDefined();
        })
    }));

    it("getHouseholdByEmail return a household object",
        inject([MockBackend, ApiService],
            (mockBackend: MockBackend, service:ApiService)=>{

                mockBackend.connections.subscribe(
                    (connection: MockConnection) => {
                        connection.mockRespond(new Response(
                            new ResponseOptions({
                                body: {
                                    "id":1,
                                    "name":"The b@ckstack",
                                    "tasktodo":[{
                                        "id":1,
                                        "name":"task1",
                                        "dueDate":"2017/01/19",
                                        "description":"clean the bathroom",
                                        "period":4,
                                        "assigned_to":71,
                                        "household_id":1,
                                        "points":30
                                    },
                                        {
                                            "id":2,
                                            "name":"task2",
                                            "dueDate":"2017/01/19",
                                            "description":"clean the kitchen",
                                            "period":4,
                                            "assigned_to":71,
                                            "household_id":1,
                                            "points":30
                                        }
                                    ],
                                    "countFinishedTasks":4,
                                    "countFinishedAwards":5,
                                    "countTotalScore":200,
                                    "countTasks":30,
                                    "mostPopularTask":"clean the bathroom",
                                    "mostAwardsWon":"Bart",
                                    "lastAwardWonBy":"Steven",
                                    "tasks":[
                                        {
                                            "id":1,
                                            "name":"task1",
                                            "dueDate":"2017/01/19",
                                            "description":"clean the bathroom",
                                            "period":4,
                                            "assigned_to":71,
                                            "household_id":1,
                                            "points":30
                                        },
                                        {
                                            "id":2,
                                            "name":"task2",
                                            "dueDate":"2017/01/19",
                                            "description":"clean the kitchen",
                                            "period":4,
                                            "assigned_to":71,
                                            "household_id":1,
                                            "points":30
                                        }
                                    ],
                                    "users":[
                                        {
                                            "id":1,
                                            "name":"steven",
                                            "lname":"mollie",
                                            "email":"stevedemolle@hotmail.com",
                                            "household_id":1,
                                            "score":20,
                                            "phoneNumber":"0476525906",
                                            "uid":"blablablabla",
                                            "imgsrc":"imgsrc"
                                        },
                                        {
                                            "id":2,
                                            "name":"bart",
                                            "lname":"delrue",
                                            "email":"bart.delrue@hotmail.com",
                                            "household_id":1,
                                            "score":20,
                                            "phoneNumber":"telnr",
                                            "uid":"blablablabla",
                                            "imgsrc":"imgsrc"
                                        },

                                    ],
                                    "award":{
                                            "id":1,
                                        "name":"award",
                                        "month":"2017/01/19",
                                        "description":"award of the month",
                                        "winner_id":71,
                                        "household_id":1,
                                        "creator_id":71
                                    }
                                }
                            })
                            )
                        )
                    }
                );

                service.getHouseholdbyEmail("mordicus_87@hotmail.com").subscribe(data => {

                    expect(data instanceof Household).toBeTruthy() ;
                });
            }));
});
