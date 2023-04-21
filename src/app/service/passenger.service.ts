import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Passenger } from '../models/passenger';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {

  constructor(private http :HttpClient) { }

  public addPassenger(passenger: Passenger, flightId: number) : Observable<Passenger>{
    return this.http.post<Passenger>(`http://localhost:8786/api/passenger/add/${flightId}`, passenger);
  }

  public addSsr(passengerId: number) : Observable<any> {
    return this.http.post<any>(`http://localhost:8786/api/ssr/add/${passengerId}`, {});
  }
}
