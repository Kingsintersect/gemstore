import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-product-card',
  templateUrl: './home-product-card.component.html',
  styleUrls: ['./home-product-card.component.scss']
})
export class HomeProductCardComponent implements OnInit {

  @Input() product:any;

  constructor(private router: Router){}

  ngOnInit() {
    
  }

  navigateTo(){
    this.router.navigate(["cart"])
  }

}
