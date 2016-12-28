import {Component, OnInit} from '@angular/core';
import * as io from 'socket.io-client';
import * as firebase from 'firebase';

@Component({
    selector: 'app-message-list',
    templateUrl: './message-list.component.html',
    styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
    messages: String[] = ["een", "twee", "drie"];
    socket = null;
    constructor() {
        this.socket = io("http://localhost:3000");
        firebase.auth().currentUser.getToken().then(token => {
            this.socket.emit("subscribe", token);
        });
        this.socket.on("sent-message", function (msg) {
            this.messages.push(msg);
            console.log(msg);
        });
    }
    ngOnInit() {
    }

}
