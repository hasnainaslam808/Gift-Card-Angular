import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoriesComponent } from './categories/categories.component';
import { UsersComponent } from './users/users.component';
import { OrdersComponent } from './orders/orders.component';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [
    DashboardComponent,
    CategoriesComponent,
    UsersComponent,
    OrdersComponent,
    FilterComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component:OrdersComponent }

    ])
  ]

})
export class AdminPanelModuleModule { }
