import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { lehngacholiPage2 } from 'src/Data/Saree/lenghaCholiPage2';
import { AppState } from 'src/app/Models/AppState';
import { CartService } from 'src/app/State/Cart/cart.service';
import { ProductService } from 'src/app/State/Product/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  pageTitle = "Product Details"

  selectedColor:any
  selectedSize:any
  reviews = [1,1,1];
  relatedProducts: any;
  product: any;
  productId:any;

  constructor(
    private router: Router, 
    private product_service: ProductService, 
    private activate_route: ActivatedRoute,
    private store: Store<AppState>,
    private cart_service: CartService
  ){}

  ngOnInit(){
    this.relatedProducts = lehngacholiPage2.slice(0, 8);
    const id = this.activate_route.snapshot.paramMap.get("id");
    
    this.product_service.findProductsById(id)

    this.productId = id;
    this.store.pipe(select((store) => store.product)).subscribe((product) => {
      this.product = product.product;
      // this.pageTitle = product.product.brand
      // console.log('store data', product.product)
    }) 
  }

  handleAddToCart(){
    this.router.navigate(['cart'])

  }

  handlePurchase(){
    const data =  {size: this.selectedSize, productId: this.productId};
    this.cart_service.addItemToCart(data);
    this.cart_service.getCart();
    this.router.navigate(['checkout'])
  }
}
