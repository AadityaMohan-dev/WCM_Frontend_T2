import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flight } from '../models/flight';
@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private http : HttpClient) { }
  getFlightDetails() : Observable<Flight[]> {
    return this.http.get<Flight[]>('http://localhost:8786/api/flight/details/get/all');
  }

}
