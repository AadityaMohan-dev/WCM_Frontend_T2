import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  public login(userInfo : User, token : string) : Observable<any>{
    let header = {'Autharization' : 'Basic' + token};
    return  this.http.get<User>('',{headers : header})
  }

}
