import {Injectable} from "@angular/core";
import * as io from "socket.io-client";
import * as firebase from "firebase";
import {Observable, Subject} from "rxjs";
import {Contract} from "../contract";

@Injectable()
export class SocketService {
    socket;
    private resubscribeNeededSource = new Subject<boolean>();

    socketResubscribed$ = this.resubscribeNeededSource.asObservable();


    constructor(private contract:Contract) {
        this.connect();
    }

    private connect():void {
        this.socket = io.connect(this.contract.Hostname);
        this.socket.on("connect", () => this.subscribe());
    }

    private subscribe():void {
        this.resubscribeNeededSource.next(true);

        firebase.auth().currentUser.getToken().then(token => {
            this.socket.emit("subscribe", token);
        });
    }

    resubscribe():void {
        this.socket.disconnect();
        this.connect();
    }

    sendMessage(message:String):void {
        this.socket.emit("chat-message", message);
    }

    receiveMessages():Observable<any> {
        return Observable.create((observer: any) => {
            this.socket.on("sent-message", (msg) => {
                //console.log("test");
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
