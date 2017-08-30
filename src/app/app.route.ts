import {LoginComponent} from "./account/login/login.component";
import {Routes} from "@angular/router";
import {HomeComponent} from "./layout/navbar/home/home.component";
import {ArticleComponent} from "./layout/navbar/article/article.component";
import {InteractionComponent} from "./layout/navbar/interaction/interaction.component";
import {AboutComponent} from "./layout/navbar/about/about.component";

export const router: Routes = [
  { path: '',component: HomeComponent},
  { path: 'home',component: HomeComponent},
  { path: 'article',component: ArticleComponent},
  { path: 'interaction',component: InteractionComponent},
  { path: 'about',component: AboutComponent},
  { path: 'share',component: LoginComponent},
];
