import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-category-tablets',
  templateUrl: './product-category-tablets.component.html',
  styleUrls: ['./product-category-tablets.component.scss']
})
export class ProductCategoryTabletsComponent {

  constructor(private router: Router){}

  navigateTo(){
    this.router.navigate(["men/clothing/mens_kutar"])
  }

}
