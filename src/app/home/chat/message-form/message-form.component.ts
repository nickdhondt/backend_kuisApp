import {Component, OnInit, NgModule} from '@angular/core';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css'],
})

export class MessageFormComponent implements OnInit {
  socket = null;
  messageContent = "";

  constructor() {
    this.socket = io();
  }

  sendMessage() {
    this.socket.emit("chat-message", this.messageContent);
    this.messageContent = "";
  }

  ngOnInit() {
  }

}
