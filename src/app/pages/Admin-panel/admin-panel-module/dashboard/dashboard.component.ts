import { Component, OnInit } from '@angular/core';
import { ChartType } from 'angular-google-charts';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

cards=[
  {img:'assets/img p.png',title:"Total Users",price:'212k'},
  {img:'assets/8.svg',title:"Blocked Users",price:'312k'},
  {img:'assets/3.svg',title:"No of Cards",price:'948'},
  {img:'assets/4.svg',title:"Total Revenue",price:'$474'},
  {img:'assets/5.svg',title:"Returned Cards",price:'233'},
  {img:'assets/3.svg',title:"Total Users",price:'212k'},
  {img:'assets/6.svg',title:"Purchased Gift Card",price:'823'},
  {img:'assets/4.svg',title:"Total Users",price:'212k'},
  {img:'assets/7.svg',title:" Total Brands",price:'$322'},
  {img:'assets/5.svg',title:"Total Users",price:'212k'},
  {img:'assets/8.svg',title:"Blocked User",price:'4'},
  {img:'assets/9.svg',title:"Total Users",price:'232k'},
 

]

public chartData: any;

  chartType: ChartType = ChartType.Line;
  myData = [
    ['Feb1',  0],
    ['Feb2',  2000],
    ['Feb5',  3000],
    ['Feb7',  5000],
    ['Feb8',  7000],  
    ['Feb9',  5000],
    ['Feb12',  7000],
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
