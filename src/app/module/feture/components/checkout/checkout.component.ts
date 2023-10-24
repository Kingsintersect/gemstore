import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  pageTitle = "Checkout Form";

  cart = [1, 1, 1];

  constructor(private router: Router) { }

  handleConfirmOrder() {
    this.router.navigate(['payment-success'])
  }

}
