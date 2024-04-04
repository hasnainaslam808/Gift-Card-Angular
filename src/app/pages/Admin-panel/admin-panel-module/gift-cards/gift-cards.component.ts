import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gift-cards',
  templateUrl: './gift-cards.component.html',
  styleUrls: ['./gift-cards.component.scss']
})
export class GiftCardsComponent implements OnInit {

  tableData=[
    {cardID:233423,brand:"KFC",amount:23,country:"Pakistan"},
    {cardID:233423,brand:"KFC",amount:23,country:"Pakistan"},
    {cardID:233423,brand:"KFC",amount:23,country:"Pakistan"},
    {cardID:233423,brand:"KFC",amount:23,country:"Pakistan"},
    {cardID:233423,brand:"KFC",amount:23,country:"Pakistan"},
    {cardID:233423,brand:"KFC",amount:23,country:"Pakistan"},
    {cardID:233423,brand:"KFC",amount:23,country:"Pakistan"},
    {cardID:233423,brand:"KFC",amount:23,country:"Pakistan"},
    {cardID:233423,brand:"KFC",amount:23,country:"Pakistan"},
    {cardID:233423,brand:"KFC",amount:23,country:"Pakistan"},
    {cardID:233423,brand:"KFC",amount:23,country:"Pakistan"},
    {cardID:233423,brand:"KFC",amount:23,country:"Pakistan"},
    {cardID:233423,brand:"KFC",amount:23,country:"Pakistan"},
    {cardID:233423,brand:"KFC",amount:23,country:"Pakistan"},
    {cardID:233423,brand:"KFC",amount:23,country:"Pakistan"},
    {cardID:233423,brand:"KFC",amount:23,country:"Pakistan"},
    {cardID:233423,brand:"KFC",amount:23,country:"Pakistan"},


  ]
  pageSize=5;
  currentPage=1;

  constructor() { }

  ngOnInit(): void {
  }

}
