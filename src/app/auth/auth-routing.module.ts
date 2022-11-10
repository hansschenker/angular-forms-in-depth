import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// auth
import { SigninComponent } from './../auth/components/signin/signin.component';
import { AuthPage } from './../auth/auth.page';
import { SignupComponent } from './components/signup/signup.component';

  const routes: Routes = [
    { path: '', component: AuthPage, children: [
      { path: 'signin', component: SigninComponent },
      { path: 'signup', component: SignupComponent },
    ] }
  ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
