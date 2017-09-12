import {LoginComponent} from "./account/login/login.component";
import {Routes} from "@angular/router";
import {HomeComponent} from "./front/layout/navbar/home/home.component";
import {ArticleComponent} from "./front/layout/navbar/article/article.component";
import {InteractionComponent} from "./front/layout/navbar/interaction/interaction.component";
import {AboutComponent} from "./front/layout/navbar/about/about.component";
import {ShareComponent} from "./front/layout/navbar/share/share.component";
import {AdminComponent} from "./admin/admin.component";

export const router: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    outlet: "primary",
  },
  {
    path: 'article',
    component: ArticleComponent,
    outlet: "primary"
  },
  {
    path: 'interaction',
    component: InteractionComponent,
    outlet: "primary"
  },
  {
    path: 'about',
    component: AboutComponent,
    outlet: "primary"
  },
  {
    path: 'share',
    component: ShareComponent,
    outlet: "primary"
  },
  {
    path: 'admin',
    component: AdminComponent

  }
];
