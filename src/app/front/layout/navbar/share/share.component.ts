import { Component, OnInit } from '@angular/core';
import {DataService} from "../../../../utils/data.service";
import {addResourceUrl, deleteResourceUrl, getResourceUrl} from "../../../../app.constants";
import {Resource} from "./resource";
@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {
  errorMessage: String;
  bookName: String;
  resources =[];
  resource = new Resource();
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData(getResourceUrl).subscribe(
      //(data) => this.resources = data
    )
    // this.dataService.getDataMethod("resource/add");
  /*  this.dataService.getData(getResourceUrl).subscribe(
      (data) => console.log(data)
    )*/
    this.dataService.postDataMethod(addResourceUrl).subscribe(
      (data) => console.log(data)
    );
    this.dataService.deleteMethod(deleteResourceUrl);

  }

}
