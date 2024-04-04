import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoriesComponent } from './categories/categories.component';
import { UsersComponent } from './users/users.component';
import { OrdersComponent } from './orders/orders.component';
import { FilterComponent } from './filter/filter.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { GiftCardsComponent } from './gift-cards/gift-cards.component';
import { BrandsComponent } from './brands/brands.component';

@NgModule({
  declarations: [
    DashboardComponent,
    CategoriesComponent,
    UsersComponent,
    OrdersComponent,
    FilterComponent,
    GiftCardsComponent,
    BrandsComponent,
    
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    RouterModule.forChild([
      { path: '', component:BrandsComponent }

    ])
  ]

})
export class AdminPanelModuleModule { }
