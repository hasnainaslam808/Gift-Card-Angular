import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule}from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SidenavbarComponent } from './shared/components/sidenavbar/sidenavbar.component';
import { HeaderComponent } from './shared/components/header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidenavbarComponent,
    HeaderComponent,
  

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
