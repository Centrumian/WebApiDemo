import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

    private url = "/api/check";

    constructor(private http: HttpClient) {
    }

    getProducts() {
        return this.http.get(this.url);
    }
}