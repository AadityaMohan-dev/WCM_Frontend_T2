import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { addwc } from '../models/addwc';

@Injectable({
  providedIn: 'root'
})
export class AddwcService {
  [x: string]: any;
  


  constructor(private http : HttpClient) { }

  //post api for wheelchair
  public addWheelchair(addwc : addwc , userId : any) : Observable<any>{
    console.log();
    return this.http.post<any>('http://localhost:8786/api'+ `/staff/wc/${userId}`,addwc);
  }
}
