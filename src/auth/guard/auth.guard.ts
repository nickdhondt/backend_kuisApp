/**
 * Created by Bart on 21/12/2016.
 */
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map'

import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {AuthService} from "../services/auth.service";
import {Observable} from "rxjs";


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private auth: AuthService, private router:Router) {}

    // canActivate() {
    //     console.log("canactivate: " + this.auth.authenticated);
    //     return (this.auth.authenticated);
    // }

    canActivate(): Observable<boolean> {
        return this.auth.auth$
            .take(1)
            .map(authState => !!authState)
            .do(authenticated => {
                if (!authenticated) {
                    this.router.navigate(['/']);
                }
            });
    }
}