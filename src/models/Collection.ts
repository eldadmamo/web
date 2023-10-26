import axios, {request} from 'axios'
import {User, UsersProps} from "./User";
import {Eventing} from "./Eventing";
import {AxiosResponse} from "axios/index";

export class Collection<T, K>{
    constructor(public models: User[] = [], public events: Eventing = new Eventing(), public rootUrl: string, public deserialize: (json:K) => T) {
    }

    get on() {
        return this.events.on;
    }

    get trigger() {
        return this.events.trigger;
    }

    fetch(): void {
        axios.get(this.rootUrl).then((response: AxiosResponse) => {
              response.data.forEach((value: K) => {
                  this.models.push(this.deserialize(value));

              });

              this.trigger('change')
        })
    }
}