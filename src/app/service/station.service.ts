import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Station } from '../models/station';

@Injectable({
  providedIn: 'root'
})
export class StationService {

  constructor(private http : HttpClient) { }

  getStationByUserName(token : String) : Observable<Station>{
    let header = {'Authorization' : 'Basic ' + token};
    return this.http.get<Station>('http://localhost:8786/api/user/get/details', {headers : header});
  }
}
