/**
 * Created by Bart on 27/12/2016.
 */

export class User {

    constructor(public id: number,
                public name: string,
                public lname: string,
                public email: string,
                public household_id: string,
                public score: string,
                public phoneNumber: string,
                public uid: string,
                public imgsrc: string) {
    }

    public static makeUserFromJSON(item): User {

        return new User(
            item.id,
            item.name,
            item.lname,
            item.email,
            item.household_id,
            item.score,
            item.phoneNumber,
            item.uid,
            item.imgsrc)
    }
}
