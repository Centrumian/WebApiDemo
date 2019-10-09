import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

    constructor(private http: HttpClient) {
    }

    getUsers() {
        var url = "/api/users";
        return this.http.get(url);
    }

    getFilteredUsers(fstr : string) {
        var url = "/api/filteredusers?fstr=" + fstr;
        return this.http.get(url);
    }
}