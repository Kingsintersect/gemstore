import { Component, Input, OnInit } from '@angular/core';
import { menu } from './nav-menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {

  category:any;
  @Input() selectedSection:any;

  constructor(private router: Router){}

  ngOnInit() {
    this.category = menu;
  }

  handleNavigate = (path: any) => {
    this.router.navigate([path])
  }

}
