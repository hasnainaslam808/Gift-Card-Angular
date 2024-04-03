import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [

  {path: '', component:LoginComponent,data:{currentRoute:'login'}},
  {path:'reset-password', component:LoginComponent,data:{currentRoute:'reset-password'}},
  {path:'emial-verification', component:LoginComponent,data:{currentRoute:'emial-verification'}},
  {path:'set-new-password', component:LoginComponent,data:{currentRoute:'set-new-password'}},
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
