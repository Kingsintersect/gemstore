import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceDetailCardComponent } from './price-detail-card.component';

describe('PriceDetailCardComponent', () => {
  let component: PriceDetailCardComponent;
  let fixture: ComponentFixture<PriceDetailCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PriceDetailCardComponent]
    });
    fixture = TestBed.createComponent(PriceDetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
