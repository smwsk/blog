import {Component, OnInit, TemplateRef} from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import {BsModalRef} from "ngx-bootstrap";
import {AboutComponent} from "../../layout/navbar/about/about.component";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authenticationError: boolean;//认证错误信息
  username: string;//用户名
  password: string;//密码
  rememberMe: boolean;//记着密码
  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}
  ngOnInit() {
    console.log("LoginComponent Init");
  }
}
