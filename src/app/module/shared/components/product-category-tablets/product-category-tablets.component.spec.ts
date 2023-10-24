import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCategoryTabletsComponent } from './product-category-tablets.component';

describe('ProductCategoryTabletsComponent', () => {
  let component: ProductCategoryTabletsComponent;
  let fixture: ComponentFixture<ProductCategoryTabletsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCategoryTabletsComponent]
    });
    fixture = TestBed.createComponent(ProductCategoryTabletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
