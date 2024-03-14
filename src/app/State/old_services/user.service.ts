// import { HttpClient, HttpHeaders } from "@angular/common/http";
// import { Injectable } from "@angular/core";
// import { Store } from "@ngrx/store";
// import { catchError, map, of } from "rxjs";
// import { BASE_API_URL } from "src/app/config/api";
// import { getUserProfileFailure, getUserProfileSuccess, logOutSuccess } from "./User.Actions";

// @Injectable({
//     providedIn: 'root',
// })

// export class UserService {
//     private apiUrl = BASE_API_URL + "/api";
//     headers: any;

//     constructor(private http: HttpClient, private store: Store) {
//         this.headers = new HttpHeaders().set("Authorization", `Bearer ${localStorage.getItem("access_token")}`);
//     };

//     getUserProfile() {
//         const headers = new HttpHeaders().set("Authorization", `Bearer ${localStorage.getItem("access_token")}`);
//         return this.http.get(`${this.apiUrl}/user/profile`, { headers }).pipe(
//             map((user: any) => {
//                 // console.log("user profile success", user);
//                 return getUserProfileSuccess({ userProfile: user });
//             }),
//             catchError((error) => {
//                 // console.log('error', error)
//                 return of(
//                     getUserProfileFailure(
//                         error.response && error.response.data.message ? error.response.data.message : error.message
//                     )
//                 )
//             }),
//         ).subscribe((action) => this.store.dispatch(action))
//     }


//     logOut() {
//         localStorage.removeItem("access_token");
//         this.store.dispatch(logOutSuccess());
//     }
// }