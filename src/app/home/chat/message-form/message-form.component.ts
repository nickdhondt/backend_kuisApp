import {Component, OnInit, EventEmitter, Output} from "@angular/core";
import {ChatSocketService} from "../../../../service/chat-socket.service";

@Component({
    selector: 'app-message-form',
    templateUrl: './message-form.component.html',
    styleUrls: ['./message-form.component.css'],
})

export class MessageFormComponent implements OnInit {
    socket = null;
    messageContent:String = "";
    @Output() messageSent: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(private chatSocketService:ChatSocketService) {}

    sendMessage() {
        if (this.messageContent.trim() !== "") {
            this.chatSocketService.sendMessage(this.messageContent);
            this.messageContent = "";
            this.messageSent.emit(true);
        }
    }

    ngOnInit() {
    }

}
