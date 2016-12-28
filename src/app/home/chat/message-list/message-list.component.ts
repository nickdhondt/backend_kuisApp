import {Component, OnInit} from '@angular/core';
import * as io from 'socket.io-client';
import * as firebase from 'firebase';
import {Observable} from "rxjs";

@Component({
    selector: 'app-message-list',
    templateUrl: './message-list.component.html',
    styleUrls: ['./message-list.component.css']
})

export class MessageListComponent implements OnInit {
    messages: Array<String> = [];
    socket = null;

    constructor() {
        this.socket = io(location.protocol+'//'+location.hostname+(location.port ? ':' + (location.port === '4200' ? "3000" : location.port) : ''));
        firebase.auth().currentUser.getToken().then(token => {
            this.socket.emit("subscribe", token);
        });

        let that = this;

        this.socket.on("sent-message", function (msg) {
            that.messages.push(msg);
            console.log("receive");
        }, this);
    }

    ngOnInit() {
    }

}
