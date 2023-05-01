import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../Header/header/header.component';
import { HomePageComponent } from '../Home/home-page/home-page.component';
import { LoginFormComponent } from '../Login/login-form/login-form.component';
import { RegisterUserFormComponent } from '../Register/register-user-form/register-user-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: 'homedashboard',component : HomePageComponent,
    children : [
     { path: 'login',component : LoginFormComponent},
     {path: 'register',component : RegisterUserFormComponent,}
    ]
  
  }
];

@NgModule({
  declarations: [
    RegisterUserFormComponent,
    HeaderComponent,
    LoginFormComponent,
    HomePageComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    HeaderComponent,
    HomePageComponent
  ]
})
export class SharedModuleModule { }
