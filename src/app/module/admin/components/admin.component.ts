import { Component, OnInit } from '@angular/core';
import { adminMenu, menuSection } from 'src/Data/adminMenu';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  menuList: menuSection[] = [];

  ngOnInit(){
    this.menuList = adminMenu;
  }
}
