import {Component, EventEmitter, OnInit, Output, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {LoginComponent} from "../../../account/login/login.component";
import {Router} from "@angular/router";
import {startWith} from "rxjs/operator/startWith";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  public bsModalRef: BsModalRef;
  @Output()
  item:EventEmitter<any> = new EventEmitter();
  constructor( private modalService: BsModalService,
               private router: Router
  ) {  }

  ngOnInit() {
    console.log("NavbarComponent Init");
  }

  login (){
    this.bsModalRef = this.modalService.show(LoginComponent);
    this.modalService.setScrollbar();

  }

  goApplicationDetail(name:number,password:string) {
    name=222;
    password="123";
    this.router.navigate(
      ['login',{"name":name,"password":password}]
    )
  }

  gotoAdmin() {
    this.item.emit(false);
    console.log(this.item);
  }

}
