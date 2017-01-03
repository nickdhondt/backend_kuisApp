import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable()
export class UpdateTaskListService {

    private updateListNeededSource = new Subject<boolean>();

    listUpdated$ = this.updateListNeededSource.asObservable();

    constructor() {
    }

    updateListNeeded() {
        this.updateListNeededSource.next(true);
    }

}
