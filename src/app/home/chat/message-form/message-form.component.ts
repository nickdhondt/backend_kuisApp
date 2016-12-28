import {Component, OnInit, NgModule} from '@angular/core';
import * as io from 'socket.io-client';
import * as firebase from 'firebase';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-message-form',
    templateUrl: './message-form.component.html',
    styleUrls: ['./message-form.component.css'],
})

export class MessageFormComponent implements OnInit {
    socket = null;
    messageContent:String = "test";

    constructor() {
        this.socket = io("http://localhost:3000");
        firebase.auth().currentUser.getToken().then(token => {
            this.socket.emit("subscribe", token);
        });
    }

    sendMessage() {
        this.socket.emit("chat-message", this.messageContent);
        console.log("send");
        this.messageContent = "";
    }

    ngOnInit() {
    }

}
