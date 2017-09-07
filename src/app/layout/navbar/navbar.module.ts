import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AboutComponent} from "./about/about.component";
import {HomeComponent} from "./home/home.component";
import {ArticleComponent} from "./article/article.component";
import {InteractionComponent} from "./interaction/interaction.component";
import {RouterModule} from "@angular/router";
import {router} from "../../app.route";
import {ShareComponent} from "./share/share.component";

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    AboutComponent,
    HomeComponent,
    ArticleComponent,
    InteractionComponent,
    ShareComponent
  ]
})
export class NavbarModule { }
