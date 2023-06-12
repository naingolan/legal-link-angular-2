import { Component, EventEmitter, Output } from '@angular/core';
import { navbarData } from '../new-data';

interface SideNavToggle{
  screenWidth:number;
  collapsed:boolean;

}
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  @Output() onToggleSideNav = EventEmitter<SideNavToggle> = new EventEmitter()
  collapsed =false;
  screenWidth:number=0;
  navData = navbarData;

  closeSidenav():void{
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed:this.collapsed, screnWidth:this.screenWidth})

  }
  toggleCollapse():void{
    this.collapsed =  false;
    this.onToggleSideNav.emit({collapsed:this.collapsed, screnWidth:this.screenWidth})
  }
}
