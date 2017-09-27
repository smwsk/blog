import {Component, OnInit} from '@angular/core';
import {DataService} from "../../../../../utils/data.service";
import {findAllArticle} from "../../../../../app.constants";
import {Article} from "../../../entity/article";
import {HomeService} from "../home.service";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  articleList: Article[];
  articleLength: number;
  constructor(private homeService: HomeService) {
  }

  ngOnInit() {
    this.homeService.getArticleData(findAllArticle)
      .subscribe((res) => {
        console.log(res.json())
        this.articleList = res.json()
        this.articleLength = this.articleList.length /3;
      });

  }

}
