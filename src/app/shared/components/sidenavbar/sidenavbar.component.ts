import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }
  @Output() closeOffcanvasEvent = new EventEmitter<void>();

    closeOffcanvas() {
        this.closeOffcanvasEvent.emit();
    }
}
