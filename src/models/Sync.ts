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

    save(data: T): void {
        const {id} = data;

        if (id) {
            axios.put(`${this.rootUrl}/${id}`, data)
                .then((response) => {
                    // Handle the response if needed
                })
                .catch((error) => {
                    console.error('PUT request error:', error);
                });
        } else {
            axios.post('${this.rootUrl}', data)
                .then((response) => {
                    // Handle the response if needed
                })
                .catch((error) => {
                    console.error('POST request error:', error);
                });
        }
    }
}