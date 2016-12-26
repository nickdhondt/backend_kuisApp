import {Injectable} from "@angular/core";
import {Headers, Http, Response} from "@angular/http";
import {Contract} from "../contract";
import {Observable} from "rxjs";
import {AuthService} from "../auth/services/auth.service";

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

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'server error');
    }

    private addToken(cb) {
        this.auth.token
            .then((token) => {
                cb(token);
            })
            .catch((msg) => {
                console.log('no token: ' + msg);
            });
    }

    public getTaskstodobyhousehold(token: string, householdId: number, term: number): Observable<any[]> {

        if (term == 0) term = 7;

        this.headers.append('firebase-token', token);

        return this._http.get(this.actionUrl + "taskstodobyhousehold/" + householdId + "/" + term, {headers: this.headers})
            .map((response: Response) => <any[]>response.json())
            .catch(this.handleError);
    }

}
