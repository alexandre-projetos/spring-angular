import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';

const COMPONENTS_EXPORT = [
  LoginComponent
];

@NgModule({
  declarations: [COMPONENTS_EXPORT],
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  exports: [COMPONENTS_EXPORT]
})
export class LoginModule { }
