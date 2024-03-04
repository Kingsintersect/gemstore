import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BASE_API_URL } from '../config/api';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiUrl = BASE_API_URL + "/api/auth";

    constructor(private http: HttpClient, private store: Store) { }

    login(loginData: any) {
        return this.http.post(`${this.apiUrl}/signin`, loginData);
    }

    register(inputData: any) {
        return this.http.post(`${this.apiUrl}/signup`, inputData)
    }
}
