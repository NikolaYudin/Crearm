import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable()
export class DataService {

    private url = "/api/user";

    constructor(private http: HttpClient) {
    }

    getUsers() {
        return this.http.get(this.url);
    }

    createUser(product: User) {
        return this.http.post(this.url, product);
    }
    updateUser(product: User) {

        return this.http.put(this.url + '/' + product.id, product);
    }
    deleteUser(id: number) {
        return this.http.delete(this.url + '/' + id);
    }
}
