/**
 * Created by Bart on 28/12/2016.
 */
/**
 * Created by Bart on 26/12/2016.
 */


export class Award {

    public id: number;
    public name: string;
    public month: Date;
    public description: string;
    public winner_id: number;
    public household_id: number;
    public creator_id: number;

    constructor() {
    }

    public static makeAwardFromJSON(item): Award {

        let award = new Award();

        award.id = item.id;
        award.name = item.name;
        award.month = new Date(Date.parse(item.month));
        award.description = item.description;
        award.winner_id = item.winner_id;
        award.household_id = item.household_id;
        award.creator_id = award.creator_id;

        return award;

    }
}
