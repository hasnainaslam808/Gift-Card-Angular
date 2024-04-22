import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {
  categories = ["Food", "Bags", "Cloth","Shoes","Perfumes"];
  categoryList: string[] = []; 

  selectedCategory: string = ''; 

  tableData = [
    { images: "assets/KFC_logo.svg", brands: "KFC", BackgroundColor: 3443, totalCards: 54, assignedCategories: "Food" },
    { images: "assets/KFC_logo.svg", brands: "KFC", BackgroundColor: 3443, totalCards: 54, assignedCategories: "Food" },
    { images: "assets/KFC_logo.svg", brands: "KFC", BackgroundColor: 3443, totalCards: 54, assignedCategories: "Food" },
  ]
  pageSize = 5;
  currentPage = 1;

  constructor() { }

  ngOnInit(): void {
  }

  addToCategoryList() {
    if (this.selectedCategory && !this.categoryList.includes(this.selectedCategory)) {
      this.categoryList.push(this.selectedCategory);
    }
  }
}
