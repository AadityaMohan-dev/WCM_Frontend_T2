import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Staff } from '../models/staff';
import { staffSsr } from '../models/staffSsr';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(private http : HttpClient) { }

  getStaffByUsername(token: string) : Observable<Staff> {
    let header = {'Authorization' : 'Basic ' + token};
    return this.http.get<Staff>('http://localhost:8786/api/user/get/details', {headers : header});
  }

  getSsrDetailsForStaff(token: string) : Observable<staffSsr> {
    let header = {'Authorization' : 'Basic ' + token};
    return this.http.get<staffSsr>('http://localhost:8786/api/ssr/staff/get/ssrInfo', {headers : header});
  }
}
