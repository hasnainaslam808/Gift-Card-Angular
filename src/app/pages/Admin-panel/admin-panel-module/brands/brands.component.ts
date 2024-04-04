import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {
  tableData=[
    { images:"assets/KFC_logo.svg",brands:"KFC",BackgroundColor:3443,totalCards:54,assignedCategories:"food"},
    { images:"assets/KFC_logo.svg",brands:"KFC",BackgroundColor:3443,totalCards:54,assignedCategories:"food"},
    { images:"assets/KFC_logo.svg",brands:"KFC",BackgroundColor:3443,totalCards:54,assignedCategories:"food"},




  ]
  pageSize=5;
  currentPage=1;

  constructor() { }

  ngOnInit(): void {
  }

}
