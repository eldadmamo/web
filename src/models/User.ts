
import {Eventing} from "./Eventing";
import {Sync} from "./Sync";
import {Attributes} from './Attributes'

export interface UsersProps {
    id?: number,
    name?: string,
    age?: number
}

const roolUrl = 'http://localhost:3000/users';


export class User {
    public events: Eventing =  new Eventing()
    public sync: Sync<UsersProps> = new Sync<UsersProps>(roolUrl);
    public attribute: Attributes<UsersProps>;

    constructor(attrs : UsersProps) {
        this.attribute = new Attributes<UsersProps>(attrs);
    }

    on(eventName: string, callback: Callback) {
        this.events.on(eventName,callback)
    }

    get on() {
        return this.events.on;
    }

    get trigger() {
        return this.events.trigger;
    }

    get get() {
        return this.attribute.get;
    }
}

