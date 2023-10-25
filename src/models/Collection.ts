import {User} from "./User";
import {Eventing} from "./Eventing";

export class Collection{
    constructor(public models: User[] = [], public events: Eventing = new Eventing()) {
    }

    get on() {
        return this.events.on;
    }

    get trigger() {
        return this.events.trigger;
    }

}