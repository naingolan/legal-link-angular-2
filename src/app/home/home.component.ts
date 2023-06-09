import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';

import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit, AfterViewInit {
  title = 'smart-efd-clone2';
  @ViewChild('sidenav') sidenav!: MatSidenav;
  isSmallScreen: boolean | undefined;
  isScreenSmall: boolean | undefined;

  //my ver used here 
  homeText!: string;
  reportText!: string;
  receiptText!: string;
  invoiceText!: string;
  VFDAccountsText!: string;
  profileText!: string;
  adminDashboardText!: string;
  isLoggedIn: any;
  constructor(
    private breakpointObserver: BreakpointObserver, 

    private router:Router
    ) {}
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {
   
    this.breakpointObserver.observe([Breakpoints.Small])
      .subscribe(result => {
        this.isScreenSmall = result.matches;
      });
  }
  openUserOptions(): void {
    localStorage.removeItem('authToken');
    localStorage.removeItem('uuid');
    //this.userService.updateUserCreatedStatus(false);
    this.router.navigate(['/home']);
  }
  
  toggleSidebar() {
    if (this.isSmallScreen) {
      this.sidenav.toggle();
    }
  }

 
}
