import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginModelService} from './login/login-model.service';
import {LoginService} from './login/login.service';
import {LoginComponent} from "./login/login.component";
import {BsModalService, ModalModule} from "ngx-bootstrap";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {accountRoute} from "./account.route";

@NgModule({
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    FormsModule,
    RouterModule.forChild(accountRoute)
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
    LoginComponent,
    RouterModule
  ]
})
export class AccountModule { }
