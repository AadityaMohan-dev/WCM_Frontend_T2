import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Airline } from '../models/airline';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AirlineService {

  constructor(private http : HttpClient){}
  getAirlineByUserName(token : String) : Observable<Airline>{
    let header = {'Authorization' : 'Basic ' + token};
    return this.http.get<Airline>('http://localhost:8786/api/user/get/details', {headers : header});
  }
}
