import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  loggedIn: boolean = true;

  currentSection:any;
  isNavMenuOpen:any;
  isMobilemenu:boolean = false;

  constructor(private router: Router){}

  toggleMobileMenu() {
    this.isMobilemenu = !this.isMobilemenu;
  }

  openMenu(menuOption:any){
    this.isNavMenuOpen = true;
    this.currentSection = menuOption
  }

  closeNavBarMenu(){
    this.isNavMenuOpen = false;
  }

  navigateTo(path:any){
    this.router.navigate([path]);
  }

  @HostListener('document:click', [`$event`])
  onDocumentClick(event:MouseEvent){
    const modalContainer = document.querySelector(".modal-container");
    const openButtons = document.querySelectorAll(".open-button");

    let clickInsideButton = false;

    openButtons.forEach((button:Element) =>{
      if(button.contains(event.target as Node)){
        clickInsideButton = true;
      }
    })

    if(modalContainer && !clickInsideButton && this.isNavMenuOpen){
      this.closeNavBarMenu();
    }
  }
}
