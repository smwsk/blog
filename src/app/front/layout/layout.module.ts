import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from "./navbar/navbar.component";
import {BottomComponent} from "./bottom/bottom.component";
import {CenterComponent} from "./center/center.component";
import {NavbarModule} from "./navbar/navbar.module";
import {RouterModule} from "@angular/router";
import {RightModule} from "./right/right.module";
import {RightComponent} from "./right/right.component";

@NgModule({
  imports: [
    CommonModule,
    NavbarModule,
    RouterModule,
    RightModule
  ],
  declarations: [
    BottomComponent,
    CenterComponent,
    NavbarComponent,
    RightComponent
  ],
  exports: [
    NavbarComponent,
    RightComponent
  ]
})
export class LayoutModule { }
