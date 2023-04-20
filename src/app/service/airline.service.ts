import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Airline } from '../models/airline';
import { Observable } from 'rxjs';
import { Staff } from '../models/staff';
import { WheelChair } from '../models/wheelchair';

@Injectable({
  providedIn: 'root'
})
export class AirlineService {

  constructor(private http : HttpClient){}
  getAirlineByUserName(token : String) : Observable<Airline>{
    let header = {'Authorization' : 'Basic ' + token};
    return this.http.get<Airline>('http://localhost:8786/api/user/get/details', {headers : header});
  }

  getAirlineStaff(token : String) : Observable<Staff[]>{
    let header = {'Authorization' : 'Basic ' + token};
    return this.http.get<Staff[]>('http://localhost:8786/api/staff/get/all', {headers : header});
  }

  getAirlineWheelChair(token : String) : Observable<WheelChair[]>{
    let header = {'Authorization' : 'Basic ' + token};
    return this.http.get<WheelChair[]>('http://localhost:8786/api/wheelChair/get/all', {headers : header});
  }
}
