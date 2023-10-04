import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lehngacholiPage2 } from 'src/Data/Saree/lenghaCholiPage2';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  

  selectedColor:any
  selectedSize:any
  reviews = [1,1,1];
  relatedProducts: any;

  constructor(private router: Router){}

  ngOnInit(){
    this.relatedProducts = lehngacholiPage2.slice(0, 8);
  }

  handleAddToCart(){
    this.router.navigate(['cart'])
  }

  handlePurchase(){
    this.router.navigate(['checkout'])
  }
}
