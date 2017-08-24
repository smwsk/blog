import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NavbarComponent} from "./layout/navbar/navbar.component";
import {AccountModule} from "./account/account.module";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ArticleComponent} from "./article/article.component";
import {InteractionComponent} from "./interaction/interaction.component";
import {AboutComponent} from "./about/about.component";
import {RightComponent} from "./layout/right/right.component";
import {CenterComponent} from "./layout/center/center.component";
import {BottomComponent} from "./layout/bottom/bottom.component";
const router: Routes = [
  { path: '',component: HomeComponent},
  { path: 'home',component: HomeComponent},
  { path: 'article',component: ArticleComponent},
  { path: 'interaction',component: InteractionComponent},
  { path: 'about',component: AboutComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ArticleComponent,
    InteractionComponent,
    AboutComponent,
    RightComponent,
    CenterComponent,
    BottomComponent
  ],
  imports: [
    BrowserModule,
    AccountModule,
    RouterModule.forRoot(router)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
