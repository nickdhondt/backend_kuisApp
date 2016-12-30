import {Component, OnInit, NgModule} from '@angular/core';
import * as io from 'socket.io-client';
import * as firebase from 'firebase';
import {ChatSocketService} from "../../../../service/chat-socket.service";

@Component({
    selector: 'app-message-form',
    templateUrl: './message-form.component.html',
    styleUrls: ['./message-form.component.css'],
})

export class MessageFormComponent implements OnInit {
    socket = null;
    messageContent:String = "";

    constructor(private chatSocketService:ChatSocketService) {}

    sendMessage() {
        if (this.messageContent.trim() !== "") {
            this.chatSocketService.sendMessage(this.messageContent);
            this.messageContent = "";
        }
    }

    ngOnInit() {
    }

}
