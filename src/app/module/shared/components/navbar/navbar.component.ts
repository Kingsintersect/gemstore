import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { User, UserModel } from 'src/app/Models/User.Model';
import { getUserProfile, logOut } from 'src/app/State/User/User.Actions';
import { getuserprofiledata } from 'src/app/State/User/User.Selector';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

    currentSection: any;
    isNavMenuOpen: any;
    isMobilemenu = false;
    navbarOpen = false;

    userProfile!: User | null;
    subscriptions: Subscription = new Subscription;

    constructor(private router: Router, private store: Store<UserModel>) {
    }

    ngOnInit(): void {
        if (localStorage.getItem("access_token")) {
            this.store.dispatch(getUserProfile());
            this.store.select(getuserprofiledata).subscribe((res: any) => {
                this.userProfile = res;
            });
        }
    }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }

    handleAuthentication() {
        this.router.navigate(["/login"])
    }

    handleLogout = () => {
        this.store.dispatch(logOut());
        this.store.select(getuserprofiledata).subscribe((res: any) => {
            this.userProfile = null;
        })
    }

    toggleMobileMenu() {
        this.isMobilemenu = !this.isMobilemenu;
        this.navbarOpen = !this.navbarOpen;
    }
    onToggleMenu(e: any) {
        let nav_links = document.querySelector(".nav-links");
        let node = document.querySelector("#toggler")!;
        node.innerHTML = (node.innerHTML === "menu") ? "close" : "menu";
        // console.log(nav_links!.classList)
        nav_links!.classList.toggle("top-[9%]");
    }

    openMenu(menuOption: any) {
        this.isNavMenuOpen = true;
        this.currentSection = menuOption
    }

    closeNavBarMenu() {
        this.isNavMenuOpen = false;
    }

    navigateTo(path: any) {
        this.router.navigate([path]);
    }

    @HostListener('document:click', [`$event`])
    onDocumentClick(event: MouseEvent) {
        const modalContainer = document.querySelector(".modal-container");
        const openButtons = document.querySelectorAll(".open-button");

        let clickInsideButton = false;

        openButtons.forEach((button: Element) => {
            if (button.contains(event.target as Node)) {
                clickInsideButton = true;
            }
        })

        if (modalContainer && !clickInsideButton && this.isNavMenuOpen) {
            this.closeNavBarMenu();
        }
    }

}
