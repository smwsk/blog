import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginModelService} from './login/login-model.service';
import {LoginService} from './login/login.service';
import {LoginComponent} from "./login/login.component";
import {AlertModule, BsModalService} from "ngx-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    AlertModule.forRoot()
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    LoginModelService,
    LoginService,
    BsModalService
  ],
  exports: [
    LoginComponent
  ]
})
export class AccountModule { }
