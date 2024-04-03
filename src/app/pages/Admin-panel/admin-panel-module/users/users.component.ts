import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  tableData=[
    {id:1, name:'Wassi Ahsan', email:"wassi@gmail.com",phone:"03337471373"},
    {id:2, name:'Wassi Ahsan', email:"wassi@gmail.com",phone:"03337471373"},
    {id:3, name:'Wassi Ahsan', email:"wassi@gmail.com",phone:"03337471373"},
    {id:4, name:'Wassi Ahsan', email:"wassi@gmail.com",phone:"03337471373"},
    {id:5, name:'Wassi Ahsan', email:"wassi@gmail.com",phone:"03337471373"},
    {id:6, name:'Wassi Ahsan', email:"wassi@gmail.com",phone:"03337471373"},
    {id:7, name:'Wassi Ahsan', email:"wassi@gmail.com",phone:"03337471373"},
    {id:8, name:'Wassi Ahsan', email:"wassi@gmail.com",phone:"03337471373"},
  
  
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
