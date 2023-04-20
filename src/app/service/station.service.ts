import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Station } from '../models/station';
import { Staff } from '../models/staff';
import { WheelChair } from '../models/wheelchair';

@Injectable({
  providedIn: 'root'
})
export class StationService {

  constructor(private http : HttpClient) { }

  getStationByUserName(token : String) : Observable<Station>{
    let header = {'Authorization' : 'Basic ' + token};
    return this.http.get<Station>('http://localhost:8786/api/user/get/details', {headers : header});
  }

  getStationStaff(token : String) : Observable<Staff[]>{
    let header = {'Authorization' : 'Basic ' + token};
    return this.http.get<Staff[]>('http://localhost:8786/api/staff/get/all', {headers : header});
  }

  getStationWheelChair(token : String) : Observable<WheelChair[]>{
    let header = {'Authorization' : 'Basic ' + token};
    return this.http.get<WheelChair[]>('http://localhost:8786/api/wheelChair/get/all', {headers : header});
  }
}