import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './SharedModule/Login/login-form/login-form.component';
import { RegisterUserFormComponent } from './SharedModule/Register/register-user-form/register-user-form.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AuthGuard } from 'src/AuthGuard/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    // canActivate: [AuthGuard],
    loadChildren: () =>
    import('./SharedModule/shared-module/shared-module.module').then((m) => m.SharedModuleModule),
      pathMatch : 'prefix'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
