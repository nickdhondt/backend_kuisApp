import {Injectable} from "@angular/core";
import {Headers, Http, Response} from "@angular/http";
import {Contract} from "../contract";
import {Observable} from "rxjs";
import {AuthService} from "../auth/services/auth.service";
import {Task} from "../models/task.model";
import {Household} from "../models/household.model";
// let mongoose = require("mongoose");


@Injectable()
export class ApiService {

    private actionUrl: string;
    private headers: Headers;


    constructor(private _http: Http, private _contract: Contract, private auth: AuthService) {
        //this.actionUrl = _contract.ServerWithApiUrl;
        this.actionUrl = _contract.LocalhostWithApiUrl;
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

    public postFinishedTask(): void {
        console.log("PostfinishedTask");
        // let uristring =
        //     process.env.MONGOLAB_URI||
        //     process.env.MONGOHQ||
        //     "mongodb://admin:abc123@ds163667.mlab.com:63667/heroku_s3b0kwzb";
        //
        // mongoose.Promise = global.Promise;
        // mongoose.connect(uristring,function (err,res) {
        //     if(err){
        //         console.log("Error connecting to :" + uristring + ". " + err);
        //     }
        //     else {
        //         console.log("Succesfull connected to : " + uristring);
        //     }
        // });


    }
}
