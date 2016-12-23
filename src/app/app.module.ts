import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {AuthMethods, AngularFireModule} from "angularfire2";
import {AuthService} from "../auth/services/auth.service";
import { LoginComponent } from './login/login.component';
import {AuthGuard} from "../auth/guard/auth.guard";
import {AppRoutingModule} from "./app.routes";
import {UnauthGuard} from "../auth/guard/unauth.guard";
import {CommonModule} from "@angular/common";
import {HomeModule} from "./home/home.module";
import { NotFoundComponent } from './not-found/not-found.component';


const myFirebaseConfig = {
  apiKey: "AIzaSyB_BRv8vUg4D0njciLkTNqGBEfZM4cNVlQ",
  authDomain: "kuisapp.firebaseapp.com",
  databaseURL: "https://kuisapp.firebaseio.com",
  storageBucket: "kuisapp.appspot.com"
};

const myFirebaseAuthConfig = {
  method: AuthMethods.Popup
};


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(myFirebaseConfig, myFirebaseAuthConfig),
      CommonModule,
      HomeModule
  ],
  providers: [AuthService, AuthGuard, UnauthGuard],
  bootstrap: [AppComponent]
})

export class AppModule { }