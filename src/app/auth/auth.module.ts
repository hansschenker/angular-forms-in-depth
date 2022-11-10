import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// material
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
// Auth
import { AuthRoutingModule } from './auth-routing.module';
import { AuthPage } from './auth.page';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { PasswordStrengthDirective } from './helpers/password.directive';
import { OnlyoneerrorPipe } from './helpers/onlyoneerror.pipe';


@NgModule({
  declarations: [
    AuthPage,
    SigninComponent,
    SignupComponent,
    PasswordStrengthDirective,
    OnlyoneerrorPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule

  ],
  exports: [
    AuthPage,
    SigninComponent,
    SignupComponent
  ]
})
export class AuthModule { }
