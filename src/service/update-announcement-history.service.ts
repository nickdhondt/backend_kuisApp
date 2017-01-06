import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable()
export class UpdateAnnouncementHistoryService {

    private updateHistoryNeededSource = new Subject<boolean>();

    householdUpdated$ = this.updateHistoryNeededSource.asObservable();

    constructor() {
    }

    updateHistoryNeeded() {
        this.updateHistoryNeededSource.next(true);
    }

}
