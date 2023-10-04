import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-price-detail-card',
  templateUrl: './price-detail-card.component.html',
  styleUrls: ['./price-detail-card.component.scss']
})
export class PriceDetailCardComponent {

  @Input() cart: any;

  navigateToCheckout(){

  }
}
