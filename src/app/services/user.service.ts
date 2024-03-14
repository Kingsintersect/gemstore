import { Injectable } from '@angular/core';
import { BASE_API_URL } from '../config/api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { logOutSuccess } from '../State/User/User.Actions';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private apiUrl = BASE_API_URL + "/api";
    headers: any;

    constructor(private http: HttpClient, private store: Store) {
        this.headers = new HttpHeaders().set("Authorization", `Bearer ${localStorage.getItem("access_token")}`);
    }

    getUserProfile() {
        const headers = new HttpHeaders().set("Authorization", `Bearer ${localStorage.getItem("access_token")}`);
        return this.http.get(`${this.apiUrl}/user/profile`, { headers })
    }

    logOut() {
        localStorage.removeItem("access_token");
        return of({ result: true })
    }
}
