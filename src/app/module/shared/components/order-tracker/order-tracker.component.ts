import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-order-tracker',
  templateUrl: './order-tracker.component.html',
  styleUrls: ['./order-tracker.component.scss']
})
export class OrderTrackerComponent {
  // steps = [1,1,1,1];

  @Input() activeStep: any;
  @Input() steps: any;
}
