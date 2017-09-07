import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions,URLSearchParams} from "@angular/http";
import 'rxjs/add/operator/map';
import "rxjs/add/operator/toPromise";
import {Observable} from "rxjs/Observable";

@Injectable()
export class DataService {

  constructor( private http: Http) { }
  getData (url: string){
    return this.http.get(url)
      .map( (res) => res.json() );
  }
  getDataMethod(url: string){
    let params = new URLSearchParams();
    params.set('id', '1');
    let options = new RequestOptions({ headers: null, search: params });
    this.http.get(url, options).toPromise().then((response) => {
      console.log(response.json());
    });
  }
  postDataMethod(url: string): Observable<Resource>{
    let params = new URLSearchParams();
    params.set('rid', '100');
    return this.http.post(url,params).map(res => res.json());
  }
  deleteMethod(url: string) {
    let params = new URLSearchParams();
    params.set("id",'101');
    this.http.post(url,params).subscribe(
      (data) => console.log(data.text())
    );
  }
}
