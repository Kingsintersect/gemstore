import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { twoDmArray } from 'src/Data/placeholder_data';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  pageTitle = "Order history"

  orders: any;
  orderfilter = [
    {label: "On The Way", value: "on_the_way"},
    {label: "Confirmed", value: "confirmed"},
    {label: "Delivered", value: "delivered"},
    {label: "Canceled", value: "canceled"},
    {label: "Returned", value: "returned"},
  ];

  constructor(private router: Router){}

  ngOnInit(){
    this.orders = twoDmArray;
  }

  navigateToOrderDetails(id: number){
    this.router.navigate([`orders/${id}`]);
  }
}
