import {Injectable} from "@angular/core";
import {Headers, Http, Response, RequestOptions} from "@angular/http";
import {Contract} from "../contract";
import {Observable} from "rxjs";
import {AuthService} from "../auth/services/auth.service";
import {Task} from "../models/task.model";
import {Household} from "../models/household.model";
import {User} from "../models/user.model";
import enumerate = Reflect.enumerate;
import {Award} from "../models/award.model";


@Injectable()
export class ApiService {

    private actionUrl: string;
    private headers: Headers;


    constructor(private _http: Http, private _contract: Contract, private auth: AuthService) {
        // this.actionUrl = _contract.ServerWithApiUrl;
        console.log(_contract.AutoWithApiUrl);
        this.actionUrl = _contract.AutoWithApiUrl;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    private static handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'server error...');
    }

    public getTasks(): Observable<Task[]> {

        let tokenPromise = new Promise<Task[]>((resolve, reject) => {

            this.auth.token.then(token => {

                this.headers.set('Firebase-ID-Token', token);

                return this._http.get(
                    this.actionUrl + "tasksbytoken",

                    {headers: this.headers})
                    .map((response: Response) => {
                        let tasks: Task[] = [];
                        response.json().forEach(item => tasks.push(Task.makeTaskFromJSON(item)));
                        return tasks;
                    })
                    .catch(ApiService.handleError)
                    .subscribe(data => resolve(data), err => reject(err));
            })

        });

        return Observable.fromPromise(tokenPromise);
    }

    public getTaskstodobyhousehold(term: number = 7): Observable<Task[]> {

        let tokenPromise = new Promise<Task[]>((resolve, reject) => {

            this.auth.token.then(token => {

                this.headers.set('Firebase-ID-Token', token);

                return this._http.get(
                    this.actionUrl + "taskstodobyhousehold/" + null + "/" + term,
                    {headers: this.headers})
                    .map((response: Response) => {
                        let tasks: Task[] = [];
                        response.json().forEach(item => tasks.push(Task.makeTaskFromJSON(item)));
                        return tasks;
                    })
                    .catch(ApiService.handleError)
                    .subscribe(data => resolve(data), err => reject(err));
            })
        });

        return Observable.fromPromise(tokenPromise);

    }

    public getHousehold(): Observable<Household> {


        let tokenPromise = new Promise<Household>((resolve, reject) => {

            this.auth.token.then(token => {

                this.headers.set('Firebase-ID-Token', token);

                return this._http.get(
                    this.actionUrl + "household",
                    {headers: this.headers})
                    .map((response: Response) => {
                        return Household.makeHouseholdFromJSON(response.json());
                    })
                    .catch(ApiService.handleError)
                    .subscribe(
                        data => resolve(data),
                        err => reject(err)
                    );
            })
        });

        return Observable.fromPromise(tokenPromise);
    }

    public getEverything(): Observable<User> {


        let tokenPromise = new Promise<User>((resolve, reject) => {

            this.auth.token.then(token => {

                this.headers.set('Firebase-ID-Token', token);

                return this._http.get(
                    this.actionUrl + "userbyuid/" + null,
                    {headers: this.headers})
                    .map((response: Response) => {

                        let user: User = response.json();

                        if (user.household) {
                            for (let u in user.household.users) {
                                user.household.users[u] = User.makeUserFromJSON(user.household.users[u]);
                            }

                            for (let t in user.household.tasks) {
                                user.household.tasks[t] = Task.makeTaskFromJSON(user.household.tasks[t]);
                            }

                            for (let t in user.household.taskstodo) {
                                user.household.taskstodo[t] = Task.makeTaskFromJSON(user.household.taskstodo[t]);
                            }
                        }


                        return user;
                    })
                    .catch(ApiService.handleError)
                    .subscribe(
                        data => resolve(data),
                        err => reject(err)
                    );
            })
        });

        return Observable.fromPromise(tokenPromise);
    }


    public addFinishedTask(id: number, done: boolean, finished_by: string, finished_on: string) {

        let tokenPromise = new Promise((resolve, reject) => {
            this.auth.token.then(token => {
                this.headers.set('Firebase-ID-Token', token);
                return this._http.post(
                    this.actionUrl + "finishtask",
                    {id, done, finished_by, finished_on},
                    {headers: this.headers})
                    .map(res => res.json())
                    .catch(ApiService.handleError)
                    .subscribe(data => {}/*console.log(data)*/);
            })
        });

    }

    public addFinishedAward() {
        let data = 'Test';
        let tokenPromise = new Promise((resolve, reject) => {
            this.auth.token.then(token => {
                this.headers.set("Firebase-ID-Token", token);
                return this._http.post(
                    this.actionUrl + "finishaward",
                    {data},
                    {headers: this.headers})
                    .map(res => res.json())
                    .catch(ApiService.handleError)
                    .subscribe(data => console.log(data));

            })
        });

    }

    public addAward(description:string,name:string,month:string,winner_id:number,creator_id:number,household_id:number):Observable<Award>{

        let tokenPromise = new Promise<Award>((resolve,reject)=>{
            this.auth.token.then(token=>{
                this.headers.set("Firebase-ID-Token",token);
                return this._http.post(
                    this.actionUrl + "addaward",
                    {description,name,month,winner_id,creator_id,household_id},
                    {headers : this.headers})
                    .map(res=>res.json())
                    .catch(ApiService.handleError)
                    .subscribe(data=>console.log(" Add award Data: " +data))
            })
        });
        return Observable.fromPromise(tokenPromise);
    }
}



