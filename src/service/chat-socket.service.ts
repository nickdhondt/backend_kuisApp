import {Injectable} from '@angular/core';
import * as io from 'socket.io-client';
import * as firebase from 'firebase';
import {Observable} from "rxjs";

@Injectable()
export class ChatSocketService {

    private hostname:String = location.protocol+'//'+location.hostname+(location.port ? ':' + (location.port === '4200' ? "3000" : location.port) : '');
    socket;

    constructor() {
        this.socket = io.connect(this.hostname);
        this.socket.on("connect", () => this.subscribe());
    }

    private subscribe():void {
        firebase.auth().currentUser.getToken().then(token => {
            this.socket.emit("subscribe", token);
        });
    }

    sendMessage(message:String):void {
        this.socket.emit("chat-message", message);
    }

    receiveMessages():Observable<any> {
        return Observable.create((observer: any) => {
            this.socket.on("sent-message", (msg) => {
                observer.next(msg)
            })
        })
    }
}
