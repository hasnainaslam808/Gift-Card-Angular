import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.scss']
})
export class SidenavbarComponent implements OnInit {


  listArray=[
    {img:"assets/Group 1597883341.png",name:"Dashboard",path:"dashboard"},
    {img:"assets/Black.png",name:"Categories",path:"dashboard/categories"},
    {img:"assets/User.png",name:"Users",path:"dashboard/users"},
    {img:"assets/Group 1597883373.png",name:"Orders" ,path:"dashboard/orders"},
    {img:"assets/Group 1597883343.png",name:"Gift Cards", path:"dashboard/giftcards"},
    {img:"assets/Group 1597883375.png",name:"Total Brands",path:"dashboard/brand"},
    {img:"assets/Group 1597883374.png",name:"Policies",path:"dashboard/policy"},
    
    
    ]
  activeRoute: string='';
  constructor(private router:Router) { 
  }

 





ngOnInit(): void {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe(() => {
        this.updateActiveRoute();
      });
  }
  updateActiveRoute(): void {
    const currentRoute = this.router.url.split('/')[2];
    this.activeRoute = currentRoute;
   

  }
  @Output() closeOffcanvasEvent = new EventEmitter<void>();

    closeOffcanvas() {
        this.closeOffcanvasEvent.emit();
    }
}
