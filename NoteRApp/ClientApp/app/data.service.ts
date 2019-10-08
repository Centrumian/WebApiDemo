import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

    private url = "";

    constructor(private http: HttpClient) {
    }

    getUsers() {
        this.url = "/api/users";
        return this.http.get(this.url);
    }
}