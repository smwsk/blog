import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from "./navbar/navbar.component";
import {BottomComponent} from "./bottom/bottom.component";
import {CenterComponent} from "./center/center.component";
import {RightComponent} from "./right/right.component";
import {NavbarModule} from "./navbar/navbar.module";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    NavbarModule,
    RouterModule
  ],
  declarations: [
    BottomComponent,
    CenterComponent,
    RightComponent,
    NavbarComponent
  ],
  exports: [
    NavbarComponent,
    RightComponent
  ]
})
export class LayoutModule { }
