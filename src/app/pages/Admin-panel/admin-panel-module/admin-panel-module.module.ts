import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoriesComponent } from './categories/categories.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    DashboardComponent,
    CategoriesComponent,
    UsersComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component:UsersComponent }

    ])
  ]

})
export class AdminPanelModuleModule { }
