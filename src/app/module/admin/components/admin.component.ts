import { Component, OnInit } from '@angular/core';
import { adminGeneralMenu, adminMenu, menuSection } from 'src/Data/adminMenu';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  menuList: menuSection[] = [];
  adminGeneralMenu: menuSection[] = [];
  expanded: any = true;
  active = false;
  alert = true;

  ngOnInit(){
    this.menuList = adminMenu;
    this.adminGeneralMenu = adminGeneralMenu;
  }

  setExpand(e:any){
    e.target.parentElement.setAttribute("name","heroChevronRight");
    console.log(e.target.parentElement.attributes.name.value)
    this.expanded = !this.expanded;
  }
}
