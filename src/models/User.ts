import {Model} from './Model'
import {Attributes} from "./Attributes";
import {ApiSync} from "./ApiSync";
import {Eventing} from "./Eventing";
import {Collection} from "./Collection";


export interface UsersProps {
    id?: number,
    name?: string,
    age?: number
}

const rootUrl = 'http://localhost:3000/users';


export class User extends Model<UsersProps> {
    static buildUser(attrs: UsersProps): User {
         return new User(
                 new Attributes<UsersProps>(attrs),
                 new Eventing(),
                 new ApiSync<UsersProps>(rootUrl)
        );
    }


   static buildUserCollection(): Collection<User, UsersProps> {
     return new Collection<User, UsersProps>(
         rootUrl,
         (json: UsersProps) => User.buildUser(json)
     )
   }
}



