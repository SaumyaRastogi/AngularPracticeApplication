import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterUserFormComponent } from './SharedModule/Register/register-user-form/register-user-form.component';
import { HeaderComponent } from './SharedModule/Header/header/header.component';
import { LoginFormComponent } from './SharedModule/Login/login-form/login-form.component';
import { HomePageComponent } from './SharedModule/Home/home-page/home-page.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterUserFormComponent,
    HeaderComponent,
    LoginFormComponent,
    HomePageComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
