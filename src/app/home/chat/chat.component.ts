import {Component, OnInit} from "@angular/core";
import {Household} from "../../../models/household.model";
import {ApiService} from "../../../service/api.service";
import {SocketService} from "../../../service/socket.service";

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

    private isHidden = true;

    household: Household = new Household();

    constructor(private socketService:SocketService) {

    }

    ngOnInit() {
        this.socketService
            .receiveMessages()
            .subscribe((msg) => {
                this.isHidden = false;
            });
    }

    private toggleChat(): void {
        this.isHidden = !this.isHidden;
    }



}
