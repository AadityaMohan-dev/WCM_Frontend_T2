import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../models/User';
import { addStaff } from '../models/addstaff';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  public login(userInfo : User, token : string) : Observable<User>{
    console.log(token)
    let header = {'Authorization' : 'Basic ' + token};
    console.log(header)
    return this.http.get<User>('http://localhost:8786/api/user/login',{headers : header})
  }

  //post api
  public staffSignup(addstaff : addStaff, userId: any) : Observable<any>{
    console.log();
    return this.http.post<any>('http://localhost:8786/api'+ `/staff/add/${userId}`,addstaff)
  }

}
