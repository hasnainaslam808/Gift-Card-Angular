import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {
  categories = ["Food", "Bags", "Cloth", "Shoes", "Perfumes"];
  categoryList: string[] = [];
  selectedCategory: string = '';


  hexColor: string = '#000000';

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
  removeCategory(index: number) {
    if (index >= 0 && index < this.categoryList.length) {
      this.categoryList.splice(index, 1);
    }

  }


  updateHexColor(event: any) {
   
    this.hexColor = event.target.value;
  }
}