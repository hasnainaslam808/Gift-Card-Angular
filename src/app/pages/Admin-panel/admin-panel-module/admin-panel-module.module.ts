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
import { PoliciesComponent } from './policies/policies.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingComponent } from './setting/setting.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent,
    CategoriesComponent,
    UsersComponent,
    OrdersComponent,
    FilterComponent,
    GiftCardsComponent,
    BrandsComponent,
    PoliciesComponent,
    NotificationsComponent,
    ProfileComponent,
    SettingComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    RouterModule.forChild([
      { path: '', component:DashboardComponent,data:{header:true} },
      { path: 'categories', component:CategoriesComponent,data:{header:true}  },
      { path: 'users', component:UsersComponent ,data:{header:true} },
      { path: 'orders', component:OrdersComponent,data:{header:true}  },
      { path: 'giftcards', component:GiftCardsComponent,data:{header:true}  },
      { path: 'brand', component:BrandsComponent ,data:{header:true} },
      { path: 'policy', component:PoliciesComponent,data:{header:true}  },
      { path: 'notification', component:NotificationsComponent,data:{header:true}  },
      { path: 'profile', component:ProfileComponent,data:{header:true}  },
      { path: 'setting', component:SettingComponent,data:{header:true}  },



    ])
  ]

})
export class AdminPanelModuleModule { }
