import { Component, OnInit } from '@angular/core';
import { oneDmArray } from 'src/Data/placeholder_data';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  pageTitle = "Order Summary";
  orders: any;
  cart = [1,1,1];

  steps = [
    {id:0, title: "PLACED", isCompleted: true},
    {id:1, title: "PROCESSING", isCompleted: true},
    {id:2, title: "SHIPPED", isCompleted: false},
    {id:3, title: "DELIVERED", isCompleted: false},
  ]

  ngOnInit(){
    this.orders = oneDmArray;
  }

  navigateToCheckout(){

  }
}
