import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bread-crump',
  templateUrl: './bread-crump.component.html',
  styleUrls: ['./bread-crump.component.scss']
})
export class BreadCrumpComponent {

  @Input() bread = [
    {name: "Ecommerce", link: "/components#product-ecommerce"},
    {name: "Components", link: "/components#product-ecommerce"}
  ]
}
