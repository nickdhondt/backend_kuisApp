import {Injectable} from "@angular/core";
import {FirebaseAuthState, AuthProviders, FirebaseAuth} from "angularfire2";
import {Router} from "@angular/router";
import {Headers, Http, Response} from "@angular/http";
import {Contract} from "../../contract";
import {User} from "../../models/user.model";
import {Observable} from "rxjs";
import * as firebase from "firebase";


@Injectable()
export class AuthService {

    public authState: FirebaseAuthState = null;
    private actionUrl: string;
    private headers: Headers;

    constructor(public auth$: FirebaseAuth, private router: Router, private _http: Http, private _contract: Contract) {

        this.actionUrl = _contract.LocalhostWithApiUrl;
        //this.actionUrl = _contract.ServerWithApiUrl;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');

    //abonneer op authstate wijzigingen
    this.auth$.subscribe((state: FirebaseAuthState) => {

      this.authState = state;

      //navigeer naar login als authstate null is
      //door logout, door netwerk error, door...
      if (!state) {
        this.router.navigate(['']);
      }
    });

  }

  get authenticated(): boolean {
    return this.authState !== null;
  }

  get uid(): string {
    return this.authenticated ? this.authState.uid : '';
  }


    addUser(): Observable<User> {
        let tokenPromise = new Promise<any>((resolve, reject) => {

            this.token.then(token => {

                this.headers.set('Firebase-ID-Token', token);

                return this._http.post(
                    this.actionUrl + "adduser", null,
                    {headers: this.headers})
                    .map((response: Response) => {

                        return User.makeUserFromJSON(response.json());
                    })
                    .catch((error) => {
                        console.error(error);
                        return Observable.throw(error.json().error || 'server error...');
                    })
                    .subscribe(data => resolve(data), err => reject(err));
            })
        });

        return Observable.fromPromise(tokenPromise);
    }

  loginFacebook(): firebase.Promise<FirebaseAuthState> {
    return this.auth$
        .login({provider:AuthProviders.Facebook});
  }

  loginGoogle(): firebase.Promise<FirebaseAuthState> {
    return this.auth$
      .login({provider:AuthProviders.Google});
  }

  logout(){

      this.auth$.logout();

      // // Google sign out
      // Auth.GoogleSignInApi.signOut(mGoogleApiClient).setResultCallback(
      //     new ResultCallback<Status>() {
      // @Override
      // public void onResult(@NonNull Status status) {
      //         updateUI(null);
      //     }
      // });
  };


  get token(): firebase.Promise<string>{
    if(this.authState)
      return this.authState.auth.getToken();
    else
      return new Promise((resolve, reject) => {
        reject('authstate was null')
      });
  }

}
