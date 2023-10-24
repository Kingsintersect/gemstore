import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/Models/AppState';
import { CartService } from 'src/app/State/Cart/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {

  @Input() cartItem: any;
  @Input() showButton:any
  @Input() imageSize:any;

  constructor(
    private cartService: CartService,
    private store: Store<AppState>
  ){}

  updateCartItem(num: Number){
    this.cartService.updateCartItem({
      cartItemId: this.cartItem.id,
      data:{ quantity: num+this.cartItem.quantity }
    })
  }

  removeCartItem(){
    this.cartService.removeCartItem(this.cartItem.id)
  }

  ClearCartItems(){
    
  }

}
