import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-generic-button',
  templateUrl: './generic-button.component.html',
  styleUrls: ['./generic-button.component.scss']
})
export class GenericButtonComponent {

  @Input() buttonText: string = "Button";
  @Input() color: string = "purple"


  // eyebrow:any;
  // title:any;
  // pricing:any;

  // navlinks = [
  //   ['Home', '/dashboard'],
  //     ['Team', '/team'],
  //     ['Projects', '/projects'],
  //     ['Reports', '/reports'],
  // ]
}
