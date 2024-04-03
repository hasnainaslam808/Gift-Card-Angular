import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

cards=[
  {img:'assets/img p.png',title:"Total Users",price:'212k'},
  {img:'assets/img p.png',title:"Blocked Users",price:'312k'},
  {img:'assets/img p.png',title:"No of Cards",price:'948'},
  {img:'assets/img p.png',title:"Total Revenue",price:'$474'},
  {img:'assets/img p.png',title:"Total Users",price:'233'},
  {img:'assets/img p.png',title:"Total Users",price:'212k'},
  {img:'assets/img p.png',title:"Total Users",price:'823'},
  {img:'assets/img p.png',title:"Total Users",price:'212k'},
  {img:'assets/img p.png',title:"Total Users",price:'$322'},
  {img:'assets/img p.png',title:"Total Users",price:'212k'},
  {img:'assets/img p.png',title:"Total Users",price:'4'},
  {img:'assets/img p.png',title:"Total Users",price:'232k'},
 

]

  constructor() { }

  ngOnInit(): void {
  }

}
