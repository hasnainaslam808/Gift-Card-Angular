import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoriesComponent } from './categories/categories.component';

@NgModule({
  declarations: [
    DashboardComponent,
    CategoriesComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component:CategoriesComponent }

    ])
  ]

})
export class AdminPanelModuleModule { }
