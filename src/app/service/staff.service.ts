import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Staff } from '../models/staff';
import { staffSsr } from '../models/staffSsr';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  staffStatus$ = new Subject<string>();
  ssrStatus$ = new Subject<string>();
  staffSsrs : staffSsr[] = [];

  constructor(private http : HttpClient, private toaster: ToastrService) { }

  getStaffByUsername(token: string) : Observable<Staff> {
    let header = {'Authorization' : 'Basic ' + token};
    return this.http.get<Staff>('http://localhost:8786/api/user/get/details', {headers : header});
  }

  getSsrDetailsForStaff(token: string) : Observable<staffSsr> {
    let header = {'Authorization' : 'Basic ' + token};
    return this.http.get<staffSsr>('http://localhost:8786/api/ssr/staff/get/ssrInfo', {headers : header});
  }

  updateSourceStaffStatus(sid: any) : Observable<staffSsr> {
    return this.http.put<staffSsr>(`http://localhost:8786/api/ssr/update/source/staff/id/${sid}`, {});
  }

  updateDestinationStaffStatus(did: any) : Observable<staffSsr> {
    return this.http.put<staffSsr>(`http://localhost:8786/api/ssr/staff/updateArciveStatus/id/${did}`, {});
  }

  addToArchiveStatus(ssrDetails: staffSsr) {
    let existingStaffSsr : staffSsr = undefined;
    let isStaffSsrExists : boolean = false;
    if(this.staffSsrs.length > 0) {
      existingStaffSsr = this.staffSsrs.find(ssr => ssr.id === ssrDetails.id);
      isStaffSsrExists = (existingStaffSsr !== undefined);
    }
    if(isStaffSsrExists) {
      this.toaster.warning("SSR is already archived");
    } else {
      this.staffSsrs.push(ssrDetails);
    }
  }
}
