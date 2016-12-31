import {Pipe, PipeTransform} from "@angular/core";
import {User} from "../models/user.model";

@Pipe({
    name: 'sortUsers'
})
export class SortUsersPipe implements PipeTransform {

    transform(value: User[], args?: any): any {

        if (value == null) return null;

        switch (args) {
            case 'score': {
                value.sort((a, b) => {
                    if (a.score > b.score) {
                        return -1;
                    } else if (a.score < b.score) {
                        return 1;
                    } else {
                        return 0;
                    }
                });
            }
                break;
            default : {
                value.sort((a, b) => {
                    if (a.name < b.name) {
                        return -1;
                    } else if (a.name > b.name) {
                        return 1;
                    } else {
                        return 0;
                    }
                });
            }
        }

        return value;

    }

}
