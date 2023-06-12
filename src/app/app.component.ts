import { Component } from '@angular/core';
interface SideNavToggle{
  screenWidth:number;
  collapsed:boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'legal-link-angular';

  isSideNavCollapsed = false;
  screenWidth:number = 0;
  onToggleSideNav(data:SideNavToggle):void{
    this.isSideNavCollapsed = data.collapsed;
    this.screenWidth = data.screenWidth;
  }
}
