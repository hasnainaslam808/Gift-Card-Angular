import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
tableData=[
  {id:1,img:"assets/Group 1597883308.png", name:'Cloth',},
  {id:2,img:"assets/Group 1597883308.png", name:'Cloth',},
  {id:3,img:"assets/Group 1597883308.png", name:'Cloth',},
  {id:4,img:"assets/Group 1597883308.png", name:'Cloth',},
  {id:5,img:"assets/Group 1597883308.png", name:'Cloth',},
  {id:6,img:"assets/Group 1597883308.png", name:'Cloth',},
  {id:7,img:"assets/Group 1597883308.png", name:'Cloth',},
  {id:8,img:"assets/Group 1597883308.png", name:'Cloth',},

]
  constructor() { }

  ngOnInit(): void {
  }

}
