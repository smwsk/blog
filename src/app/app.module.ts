import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AccountModule} from "./account/account.module";
import {RouterModule} from "@angular/router";
import {LoginModelService} from "./account/login/login-model.service";
import {LoginService} from "./account/login/login.service";
import {AlertModule} from 'ngx-bootstrap';
import {LayoutModule} from "./layout/layout.module";
import {router} from "./app.route";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AccountModule,
    RouterModule.forRoot(router),//路由
    AlertModule.forRoot(),
    LayoutModule
  ],
  providers: [
    LoginModelService,
    LoginService
  ],
  bootstrap: [AppComponent],
  exports: [
  ]
})
export class AppModule { }
