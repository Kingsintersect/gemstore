import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSummaryComponent } from './data-summary.component';

describe('DataSummaryComponent', () => {
  let component: DataSummaryComponent;
  let fixture: ComponentFixture<DataSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataSummaryComponent]
    });
    fixture = TestBed.createComponent(DataSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
