import { Component, OnInit } from '@angular/core';
import {DataService} from "../../../../utils/data.service";
import {addResourceUrl, deleteResourceUrl, getResourceUrl} from "../../../../app.constants";

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {

  resource =[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData(getResourceUrl).subscribe(
      (data) => this.resource = data
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
