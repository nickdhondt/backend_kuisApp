import {Component, OnInit} from '@angular/core';
import * as io from 'socket.io-client';
import * as firebase from 'firebase';
import {Observable} from "rxjs";
import {ChatSocketService} from "../../../../service/chat-socket.service";

@Component({
    selector: 'app-message-list',
    templateUrl: './message-list.component.html',
    styleUrls: ['./message-list.component.css']
})

export class MessageListComponent implements OnInit {
    messages: Array<Object> = [{ user: { imgsrc: "https://scontent.xx.fbcdn.net/v/t1.0-1/s100x100/13100703_10206817833626040_7412135762927104247_n.jpg?oh=790f130d163810fa6f01733daea967a2&oe=589D9B76", name: "Nick", lname: "D'hondt" }, message: "Hebban olla uogala nestas hagunnan hinase hi(c) (a)nda thu uuat unbidan uue nu" },
        { user: { imgsrc: "https://scontent.xx.fbcdn.net/v/t1.0-1/s100x100/13100703_10206817833626040_7412135762927104247_n.jpg?oh=790f130d163810fa6f01733daea967a2&oe=589D9B76", name: "Nick", lname: "D'hondt" }, message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar, mauris id pulvinar semper, orci ligula pulvinar elit, ullamcorper gravida eros nibh eget orci. Mauris." },
        { user: { imgsrc: "https://scontent.xx.fbcdn.net/v/t1.0-1/s100x100/13100703_10206817833626040_7412135762927104247_n.jpg?oh=790f130d163810fa6f01733daea967a2&oe=589D9B76", name: "Nick", lname: "D'hondt" }, message: "HDes Teufels liebstes Möbelstück ist die lange Bank." }];

    constructor(private chatSocketService:ChatSocketService) {}

    ngOnInit() {
        this.chatSocketService
            .receiveMessages()
            .subscribe((msg) => {
            this.messages.push(msg)
        })
    }

}
