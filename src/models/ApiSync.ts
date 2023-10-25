import axios, {AxiosPromise, AxiosResponse} from "axios/index";
import {UsersProps} from "./User";

interface HasId {
   id?: number;
}

export class Sync<T extends HasId> {
    constructor(public rootUrl: string) {

    }
    fetch(id: number):AxiosPromise {
        return axios.get(`${this.rootUrl}/${id}`);
    }

    save(data: T): AxiosPromise {
        const {id} = data;

        if (id) {
            return axios.put(`${this.rootUrl}/${id}`, data); // Return the AxiosPromise
        } else {
            return axios.post(this.rootUrl, data); // Return the AxiosPromise
        }
    }
}