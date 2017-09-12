import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AccountModule} from "./account/account.module";
import {RouterModule} from "@angular/router";
import {LoginModelService} from "./account/login/login-model.service";
import {LoginService} from "./account/login/login.service";
import {AlertModule} from 'ngx-bootstrap';
import {LayoutModule} from "./front/layout/layout.module";
import {router} from "./app.route";
import {DataService} from "./utils/data.service";
import {HttpModule} from "@angular/http";
import {AdminComponent} from "./admin/admin.component";
import {FrontModule} from "./front/front.module";
import {AdminModule} from "./admin/admin.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, //浏览器模块
    AccountModule, //用户模块
    RouterModule.forRoot(router),//路由模块
    AlertModule.forRoot(), //弹窗模块
    HttpModule, //http请求模块
    FrontModule,//前台模块
    AdminModule //后台模块
  ],
  providers: [
    LoginModelService,
    LoginService,
    DataService,
  ],
  bootstrap: [AppComponent],
  exports: [
  ]
})
export class AppModule { }
