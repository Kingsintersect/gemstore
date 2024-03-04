import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from './Models/AppState';
import { UserService } from './State/User/user.service';
import { CartService } from './State/Cart/cart.service';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Gemstore';
  navbarOpen = true;
  userProfile: any;

  constructor(private cartService: CartService, private store: Store<AppState>,) { }

  ngOnInit(): void {
    // Flowbite
    initFlowbite();

    // if (localStorage.getItem("access_token")) {
    //   this.cartService.getCart();
    // }

  }
}
