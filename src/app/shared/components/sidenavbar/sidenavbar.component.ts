import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.scss']
})
export class SidenavbarComponent implements OnInit {


  listArray=[
    {img:"assets/Group 1597883341.png",name:"Dashboard"},
    {img:"assets/Black.png",name:"Categories"},
    {img:"assets/User.png",name:"Users"},
    {img:"assets/Group 1597883373.png",name:"Orders"},
    {img:"assets/Group 1597883343.png",name:"Gift Cards"},
    {img:"assets/Group 1597883375.png",name:"Total Brands"},
    {img:"assets/Group 1597883374.png",name:"Policies"},
    
    
    ]
  constructor() { }

  ngOnInit(): void {
  }

}
