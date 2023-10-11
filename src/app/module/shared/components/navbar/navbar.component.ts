import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/Models/AppState';
import { UserService } from 'src/app/State/User/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  
  currentSection:any;
  isNavMenuOpen:any;
  isMobilemenu:boolean = false;

  userProfile: any;
  subscriptions: Subscription = new Subscription;

  constructor(private router: Router, private userService: UserService, private store: Store<AppState>){}

  ngOnInit(): void {
    if(localStorage.getItem("jwt")) this.userService.getUserProfile(),

    this.subscriptions = this.store.pipe(select((store) => store.user))
    .subscribe((user) => {
      this.userProfile = user.userProfile;

      if(user.userProfile){
        this.router.navigate([this.router.url]);
      }
    })
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  handleAuthentication(){
    this.router.navigate(["/login"])
  }

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
  
  handleLogout = () => {
    this.userService.logOut();
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
