import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterUserFormComponent } from './SharedModule/Register/register-user-form/register-user-form.component';
import { HeaderComponent } from './SharedModule/Header/header/header.component';
import { LoginFormComponent } from './SharedModule/Login/login-form/login-form.component';
import { HomePageComponent } from './SharedModule/Home/home-page/home-page.component';
import { SharedModuleModule } from './SharedModule/shared-module/shared-module.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModuleModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
