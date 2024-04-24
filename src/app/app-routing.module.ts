import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/Admin-panel/admin-panel-module/profile/profile.component';
import { SettingComponent } from './pages/Admin-panel/admin-panel-module/setting/setting.component';
const routes: Routes = [

  { path: '', component: LoginComponent, data: { currentRoute: 'login', header: false } },
  { path: 'login', component: LoginComponent, data: { currentRoute: 'login', header: false } },
  { path: 'reset-password', component: LoginComponent, data: { currentRoute: 'reset-password', header: false } },
  { path: 'emial-verification', component: LoginComponent, data: { currentRoute: 'emial-verification', header: false } },
  { path: 'reset-password/:token', component: LoginComponent, data: { currentRoute: 'set-new-password', header: false } },

  {
    path: "dashboard",
    loadChildren: () => import('./pages/Admin-panel/admin-panel-module/admin-panel-module.module').then((m) => m.AdminPanelModuleModule)
  },
  { path: 'profile', component: ProfileComponent },
  { path: 'setting', component: SettingComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
