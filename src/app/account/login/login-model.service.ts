import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {LoginComponent} from './login.component';
import {AboutComponent} from "../../about/about.component";
@Injectable()
export class LoginModelService {
  private isOpen = false;
  constructor( private modalService: NgbModal) { }
  open(): NgbModalRef {
    if (this.isOpen) {
      return;
    }
    this.isOpen = true;
    const modalRef = this.modalService.open(
      LoginComponent, { container: 'nav'}
    );
    modalRef.result.then(
      (result) => {
        this.isOpen = false;
      }, (reason) => {
       this.isOpen = false;
      });
      return modalRef;
  }
}
