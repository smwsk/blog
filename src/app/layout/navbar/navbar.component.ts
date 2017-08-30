import {Component, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {LoginComponent} from "../../account/login/login.component";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  public bsModalRef: BsModalRef;

  constructor( private modalService: BsModalService ) {  }

  ngOnInit() {
    console.log("NavbarComponent Init");
  }

  login (){
    this.bsModalRef = this.modalService.show(LoginComponent);
  }
}
