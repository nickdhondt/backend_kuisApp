import {Injectable} from "@angular/core";
import {FirebaseAuthState, AuthProviders, FirebaseAuth} from "angularfire2";
import {Router} from "@angular/router";

@Injectable()
export class AuthService {

  public authState: FirebaseAuthState = null;

  constructor(public auth$:FirebaseAuth, private router:Router) {

    //abonneer op authstate wijzigingen
    this.auth$.subscribe((state: FirebaseAuthState) => {

      this.authState = state;

      //navigeer naar login als authstate null is
      //door logout, door netwerk error, door...
      if (!state) {
        this.router.navigate(['']);
      }
      // else{
      //   this.token.then(token => {
      //     localStorage.setItem('firebaseToken', token);
      //     console.log("localstorage set");
      //   });
      // }

      //console.log("authstate changed " + this.authenticated);
    });

  }

  get authenticated(): boolean {
    return this.authState !== null;
  }

  get uid(): string {
    return this.authenticated ? this.authState.uid : '';
  }

  loginFacebook(): firebase.Promise<FirebaseAuthState> {
    return this.auth$
        .login({provider:AuthProviders.Facebook});
        //.catch(error => console.error('Error @ AuthService#loginFacebook : ', error ));
  }

  loginGoogle(): firebase.Promise<FirebaseAuthState> {
    return this.auth$
      .login({provider:AuthProviders.Google});
      //.catch(error => console.error('Error @ AuthService#loginGoogle : ', error ));
  }

  logout(){
    this.auth$.logout()
  }


  get token(): firebase.Promise<string>{
    if(this.authState)
      return this.authState.auth.getToken();
    else
      return new Promise((resolve, reject) => {
        reject('authstate was null')
      });
  }

}
