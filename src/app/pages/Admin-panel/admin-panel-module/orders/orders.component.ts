import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  tableData=[
    {id:1, cardID:233423, email:"wassi@gmail.com",users:"Wassi Ahsan",brand:"KFC",amount:23,giftfor:"Myself"},
    {id:2, cardID:233423, email:"wassi@gmail.com",users:"Wassi Ahsan",brand:"KFC",amount:23,giftfor:"Myself"},
    {id:3, cardID:233423, email:"wassi@gmail.com",users:"Wassi Ahsan",brand:"KFC",amount:23,giftfor:"Myself"},
    {id:4, cardID:233423, email:"wassi@gmail.com",users:"Wassi Ahsan",brand:"KFC",amount:23,giftfor:"Myself"},
    {id:5, cardID:233423, email:"wassi@gmail.com",users:"Wassi Ahsan",brand:"KFC",amount:23,giftfor:"Myself"},
    {id:1, cardID:233423, email:"wassi@gmail.com",users:"Wassi Ahsan",brand:"KFC",amount:23,giftfor:"Myself"},
    {id:2, cardID:233423, email:"wassi@gmail.com",users:"Wassi Ahsan",brand:"KFC",amount:23,giftfor:"Myself"},
    {id:3, cardID:233423, email:"wassi@gmail.com",users:"Wassi Ahsan",brand:"KFC",amount:23,giftfor:"Myself"},
    {id:4, cardID:233423, email:"wassi@gmail.com",users:"Wassi Ahsan",brand:"KFC",amount:23,giftfor:"Myself"},
    {id:5, cardID:233423, email:"wassi@gmail.com",users:"Wassi Ahsan",brand:"KFC",amount:23,giftfor:"Myself"},
    {id:1, cardID:233423, email:"wassi@gmail.com",users:"Wassi Ahsan",brand:"KFC",amount:23,giftfor:"Myself"},
    {id:2, cardID:233423, email:"wassi@gmail.com",users:"Wassi Ahsan",brand:"KFC",amount:23,giftfor:"Myself"},
    {id:3, cardID:233423, email:"wassi@gmail.com",users:"Wassi Ahsan",brand:"KFC",amount:23,giftfor:"Myself"},
    {id:4, cardID:233423, email:"wassi@gmail.com",users:"Wassi Ahsan",brand:"KFC",amount:23,giftfor:"Myself"},
    {id:5, cardID:233423, email:"wassi@gmail.com",users:"Wassi Ahsan",brand:"KFC",amount:23,giftfor:"Myself"},

  ]
  pageSize=5;
  currentPage=1;

  constructor() { }

  ngOnInit(): void {
  }

}
