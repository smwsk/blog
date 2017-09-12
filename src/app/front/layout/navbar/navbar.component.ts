import {Component, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {LoginComponent} from "../../../account/login/login.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  public bsModalRef: BsModalRef;

  constructor( private modalService: BsModalService,
               private router: Router
  ) {  }

  ngOnInit() {
    console.log("NavbarComponent Init");
  }

  login (){
    this.bsModalRef = this.modalService.show(LoginComponent);
  }

  goApplicationDetail(name:number,password:string) {
    name=222;
    password="123";
    this.router.navigate(
      ['login',{"name":name,"password":password}]
    )
  }
}
