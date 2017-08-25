import {Component, OnInit, TemplateRef} from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import {BsModalRef} from "ngx-bootstrap";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public modalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }
  public openModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
  }
  ngOnInit() {
  }

}
