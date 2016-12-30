import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import * as firebase from 'firebase';
import {Observable} from "rxjs";
import {Contract} from "../contract";

@Injectable()
export class SocketService {
    socket;

    constructor(private contract:Contract) {
        this.socket = io.connect(contract.Hostname);
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

    taskUpdates():Observable<any> {
        return Observable.create((observer: any) => {
            this.socket.on("tasks-update", (taskInfo) => {
                observer.next(taskInfo)
            })
        })
    }
}
