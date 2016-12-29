import {Injectable} from "@angular/core";
import {Headers, Http, Response} from "@angular/http";
import {Contract} from "../contract";
import {Observable} from "rxjs";
import {AuthService} from "../auth/services/auth.service";
import {Task} from "../models/task.model";
import {Household} from "../models/household.model";
import {User} from "../models/user.model";
import enumerate = Reflect.enumerate;




@Injectable()
export class ApiService {

    private actionUrl: string;
    private headers: Headers;


    constructor(private _http: Http, private _contract: Contract, private auth: AuthService) {
        this.actionUrl = _contract.ServerWithApiUrl;
        //this.actionUrl = _contract.LocalhostWithApiUrl;
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

    public addFinishedTask(name: string, id: number): Observable<any> {

        let data: [string,number];
        data = [name, id];
        console.log(data);

        let tokenPromise = new Promise<any>((resolve, reject)=> {
            this.auth.token.then(token=> {
                this.headers.set('Firebase-ID-Token', token);
                return this._http.post(
                    this.actionUrl + "finishtask",
                    data,
                    {headers: this.headers})
                    .catch(ApiService.handleError)
            })
        });
        return Observable.fromPromise(tokenPromise);
    }

    public addFinishedAward(): Observable<any>{

        let tokenPromise = new Promise<any>((resolve,reject)=>{
            this.auth.token.then(token=> {
                this.headers.set('Firebase-ID-Token', token);
                return this._http.post(
                    this.actionUrl + "finishtask",
                    console.log(this.actionUrl),
                    {headers: this.headers})
                    .catch(ApiService.handleError)
            })
            });

        return Observable.fromPromise(tokenPromise);
        }



}

