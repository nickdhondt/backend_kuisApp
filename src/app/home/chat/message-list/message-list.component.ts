import {Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, Input} from "@angular/core";
import {SocketService} from "../../../../service/socket.service";
import {ApiService} from "../../../../service/api.service";
import {UpdateAnnouncementHistoryService} from "../../../../service/update-announcement-history.service";

@Component({
    selector: 'app-message-list',
    templateUrl: './message-list.component.html',
    styleUrls: ['./message-list.component.scss']
})

export class MessageListComponent implements OnInit {
    messages: Array<Object> = [];
    @Input() changes:Boolean;

    constructor(private socketService:SocketService, private apiService:ApiService, private updateAnnouncementHistoryService:UpdateAnnouncementHistoryService) {}

    ngOnInit() {
        this.socketService.socketResubscribed$.subscribe((data)=>this.socketUpdate());
        this.getAnnouncements();
    }
    ngOnChanges() {
        this.scrollToBottom();
        this.updateAnnouncementHistoryService.householdUpdated$.subscribe((data)=>{
            this.messages = [];
            this.getAnnouncements();
        });
    }

    getAnnouncements() {
        this.apiService.getAnnouncements().subscribe((data)=>{
            for(let message of data) {
                this.messages.push({message: message.message, user:{name: message.name, lname:message.lname}});
                this.scrollToBottom();
            }
        });
    }

    private socketUpdate() {
        this.socketService
            .receiveMessages()
            .subscribe((msg) => {
                this.messages.push(msg);
                this.scrollToBottom();
            });
    }

    @ViewChild('scrollMe') private myScrollContainer: ElementRef;

    public scrollToBottom(): void {

        setTimeout(() => {
            try {
                this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
            } catch (err) {
            }
        }, 300);
    }

}
