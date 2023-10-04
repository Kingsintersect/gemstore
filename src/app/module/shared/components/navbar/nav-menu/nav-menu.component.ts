import { Component, Input, OnInit } from '@angular/core';
import { menu } from './nav-menu';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {

  category:any;
  @Input() selectedSection:any;

  ngOnInit() {
    this.category = menu;
  }

}
