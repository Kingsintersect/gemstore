import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { catchError, map, of } from "rxjs";
import { BASE_API_URL } from "src/app/config/api";
import { 
    createOrderRequest, 
    createOrderSuccess, 
    createOrderFailure, 

    getOrderByIdSuccess,

    getOrderHistorySuccess,
    getOrderByIdRequest,
    getOrderHistoryFailure,
    getOrderByIdFailure,
    getOrderHistoryRequest,
} from "./order.actions";

@Injectable({
    providedIn: 'root',
})

export class OrderService{
    private API_BASE_URL = BASE_API_URL+"/api";
    private headers;

    constructor(
        private http: HttpClient, 
        private store: Store,
        private router: Router,
        private route: ActivatedRoute
    ){
        this.headers = new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        });
    };  

    createOrder(reqData: any){
        console.log('create oreder', reqData);
        const url = `${this.API_BASE_URL}/orders/`;

        return this.http.post(url, reqData, { headers: this.headers })
        .pipe(
            map((data: any) => {
                console.log('created oreder', data);
                if(data.Id){
                    this.router.navigate([`/checkout/payment/${data.Id}`], {
                        queryParams: { step: '3', order_id: data.Id },
                    });
                }
                console.log('created order - ', data);
                return createOrderSuccess({ order: data });
            }),
            catchError((error: any) => {
                console.log('catch error: ', error);
                return of(
                    createOrderFailure(
                        error.response&& error.response.data.message 
                        ? error.response.data.message
                        : error.message
                    )
                )
            })
        ).subscribe((action)=> this.store.dispatch(action))
    }

    getOrderById(orderid: string) {
        const url = `${this.API_BASE_URL}/orders/${orderid}`;

        return this.http.get(url, {headers: this.headers})
        .pipe(
            map((data: any) => {
                console.log('oreder by id', data);
                return getOrderByIdSuccess({ order: data });
            }),
            catchError((error: any) => {
                console.log('catch error: ', error);
                return of(
                    getOrderByIdFailure(
                        error.response&& error.response.data.message 
                        ? error.response.data.message
                        : error.message
                    )
                )
            })
        ).subscribe((action)=> this.store.dispatch(action))
    }

    getOrderHistory() {
        const url = `${this.API_BASE_URL}/orders/user`;

        return this.http.get(url, {headers: this.headers})
        .pipe(
            map((data: any) => {
                console.log('oreder history', data);
                return getOrderHistorySuccess({ orders: data });
            }),
            catchError((error: any) => {
                return of(
                    getOrderByIdFailure(
                        error.response&& error.response.data.message 
                        ? error.response.data.message
                        : error.message
                    )
                )
            })
        ).subscribe((action)=> this.store.dispatch(action))
    }

}