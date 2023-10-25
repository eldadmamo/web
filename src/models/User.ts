import {Model} from './Model'
import {Attributes} from "./Attributes";
import {ApiSync} from "./ApiSync";
import {Eventing} from "./Eventing";


export interface UsersProps {
    id?: number,
    name?: string,
    age?: number
}

const roolUrl = 'http://localhost:3000/users';


export class User extends Model<UsersProps> {
    static buildUser(attrs: UsersProps): User {
         return new User(
                 new Attributes<UsersProps>(attrs),
                 new Eventing(),
                 new ApiSync<UsersProps>(roolUrl)
        );
    }

   isAdminUser() : boolean {
        return this.get('id') === 1;
   }
}



