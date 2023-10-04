import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  @Input() product: any;
  @Input() index: any;

  constructor(private router: Router){}

  navigate(){
    console.log(this.product)
    this.router.navigate([`product-details/${this.index}`])
  }
}
