import { Component, OnInit } from '@angular/core';
import { filters, singleFilter } from './filterData';
import { mensPantsPage1 } from 'src/Data/pants/men_page1';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/State/Product/product.service';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/Models/AppState';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  pageTitle = "Product Category";

  filterData: any;
  singleFilterData: any;
  menPants: any;
  products: any;
  levelThree: any;
  
  constructor(
    private router: Router, 
    private activatedRoute: ActivatedRoute, 
    private productService: ProductService, 
    private store: Store<AppState>
  ){}

  ngOnInit(){
    this.filterData = filters
    this.singleFilterData = singleFilter;
    this.menPants = mensPantsPage1;

    this.activatedRoute.paramMap.subscribe(
      (params) => {
        this.levelThree = params.get("levelThree");
        var reqData = {
          category: params.get("levelThree"),
          colors:[],
          sizes:[],
          minPrice: 0,
          maxPrice: 10000,
          minDiscount: 0,
          pageNumber: 1,
          pageSize: 10,
          stock: null,
        };
        this.productService.findProductsByCategory(reqData);
      }
    );

    this.activatedRoute.queryParams.subscribe((params) => {
      const color=params['color'];
      const sizes=params['sizes'];
      const price=params['price'];
      const discount=params['disccout'];
      const pageSize=params['pageSize'];
      const stock=params['stock'];
      const sort=params['sort'];
      const pageNumber=params['pageNumber'];
      const minPrice=price?.split("-")[0];
      const maxPrice=price?.split("-")[1];

      var reqData = {
        category: this.levelThree,
        colors:color? [color].join(","):[],
        sizes:sizes,
        minPrice: minPrice? minPrice:0,
        maxPrice: maxPrice? maxPrice: 100000,
        minDiscount: discount? discount: 0,
        pageNumber: pageNumber? pageNumber: 0,
        pageSize: 10,
        stock: null,
        sort: sort? sort:"price_low"
      };


    })

    this.store.pipe(select((store) => store.product)).subscribe((product) => {
      this.products = product.products.content;
      console.log('store data', product.products.content)
    }) 
  }

  
  handleSingleSelectFilter(value:string, sectionId: string){
    const queryParams = { ...this.activatedRoute.snapshot.queryParams };
    queryParams[sectionId] = value;

    this.router.navigate([], {queryParams});
  }

}
