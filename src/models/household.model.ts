/**
 * Created by Student on 27/12/2016.
 */
export class Household {

    constructor(public id: number,
                public name: string,
                public address: string,
                public phoneNumber:string,

    ) {
    }

    public static makeHouseholdFromJSON(item): Household {

        return new Household(
            item.id,
            item.name,
            item.address,
            item.phoneNumber
            )
    }
}