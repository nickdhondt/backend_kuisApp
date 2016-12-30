import {Component, OnInit, EventEmitter, Output} from "@angular/core";
import {SocketService} from "../../../../service/socket.service";

@Component({
    selector: 'app-message-form',
    templateUrl: './message-form.component.html',
    styleUrls: ['./message-form.component.scss'],
})

export class MessageFormComponent implements OnInit {
    socket = null;
    messageContent:String = "";
    @Output() messageSent: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(private socketService:SocketService) {}

    sendMessage() {
        if (this.messageContent.trim() !== "") {
            this.socketService.sendMessage(this.messageContent);
            this.messageContent = "";
            this.messageSent.emit(true);
        }
    }

    ngOnInit() {
    }

}
