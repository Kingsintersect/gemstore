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
  title = 'gemstore';

  navbarOpen = true;
  
  userProfile: any;
  subscriptions: Subscription = new Subscription;

  constructor(
    private router: Router, 
    private userService: UserService, 
    private cartService: CartService, 
    private store: Store<AppState>,
  ){}

  ngOnInit(): void {
    // Flowbite
    initFlowbite();
    
    if(localStorage.getItem("jwt")) {
      this.userService.getUserProfile(),
      this.cartService.getCart();
    }

    this.subscriptions = this.store.pipe(select((store) => store.auth)).subscribe((user) => {
      this.userService.getUserProfile();
      console.log('store', this.store);
    })
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
