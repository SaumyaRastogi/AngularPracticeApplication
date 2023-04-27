import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../Header/header/header.component';
import { HomePageComponent } from '../Home/home-page/home-page.component';
import { LoginFormComponent } from '../Login/login-form/login-form.component';
import { RegisterUserFormComponent } from '../Register/register-user-form/register-user-form.component';



@NgModule({
  declarations: [
    RegisterUserFormComponent,
    HeaderComponent,
    LoginFormComponent,
    HomePageComponent, 
  ],
  imports: [
    CommonModule, 
  ],
  exports: [
    HeaderComponent,
    HomePageComponent
]
})
export class SharedModuleModule { }
