import {Component, OnInit, NgModule} from '@angular/core';
import * as io from 'socket.io-client';
import * as firebase from 'firebase';

@Component({
    selector: 'app-message-form',
    templateUrl: './message-form.component.html',
    styleUrls: ['./message-form.component.css'],
})

export class MessageFormComponent implements OnInit {
    socket = null;
    messageContent = "";

    constructor() {
        this.socket = io("http://localhost:3000");
    }

    sendMessage() {
        firebase.auth().currentUser.getToken().then(token => {
            this.socket.emit("chat-message", {firebaseTokenID: token, message: "message"});
            this.messageContent = "";
        });
    }

    ngOnInit() {
    }

}
