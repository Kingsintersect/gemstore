import { Component, OnInit } from '@angular/core';
import { filters, singleFilter } from './filterData';
import { mensPantsPage1 } from 'src/Data/pants/men_page1';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  filterData: any;
  singleFilterData: any;
  menPants: any;

  ngOnInit(){
    this.filterData = filters
    this.singleFilterData = singleFilter;
    this.menPants = mensPantsPage1;
  }

  

}
