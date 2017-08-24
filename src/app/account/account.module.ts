import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginModelService} from './login/login-model.service';
import {LoginService} from './login/login.service';
import {LoginComponent} from "./login/login.component";

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    LoginModelService,
    LoginService
  ],
  exports: [
    LoginComponent
  ]
})
export class AccountModule { }
