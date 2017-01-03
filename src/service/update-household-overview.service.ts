import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable()
export class UpdateHouseholdOverviewService {

    private updateHouseholdNeededSource = new Subject<boolean>();

    householdUpdated$ = this.updateHouseholdNeededSource.asObservable();

    constructor() {
    }

    updateHouseholdNeeded() {
        console.log("request received");
        this.updateHouseholdNeededSource.next(true);
    }

}
