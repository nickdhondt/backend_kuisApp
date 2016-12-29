import {Household} from "./household.model";
/**
 * Created by Bart on 27/12/2016.
 */

export class User {

    public household: Household;
    public id: number;
    public name: string;
    public lname: string;
    public email: string;
    public household_id: string;
    public score: string;
    public phoneNumber: string;
    public uid: string;
    public imgsrc: string;

    constructor() {
    }

    public static makeUserFromJSON(item): User {

        let user = new User();

        user.id = item.id;
        user.name = item.name;
        user.lname = item.lname;
        user.email = item.email;
        user.household_id = item.household_id;
        user.score = item.score;
        user.phoneNumber = item.phoneNumber;
        user.uid = item.uid;
        user.imgsrc = item.imgsrc;

        return user;

    }
}
