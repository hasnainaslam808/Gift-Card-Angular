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
  {img:'assets/img p.png',title:"Blocked Users",price:'312k'},
  {img:'assets/img p.png',title:"No of Cards",price:'948'},
  {img:'assets/img p.png',title:"Total Revenue",price:'$474'},
  {img:'assets/img p.png',title:"Returned Cards",price:'233'},
  {img:'assets/img p.png',title:"Total Users",price:'212k'},
  {img:'assets/img p.png',title:"Purchased Gift Card",price:'823'},
  {img:'assets/img p.png',title:"Total Users",price:'212k'},
  {img:'assets/img p.png',title:" Total Brands",price:'$322'},
  {img:'assets/img p.png',title:"Total Users",price:'212k'},
  {img:'assets/img p.png',title:"Blocked User",price:'4'},
  {img:'assets/img p.png',title:"Total Users",price:'232k'},
 

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
