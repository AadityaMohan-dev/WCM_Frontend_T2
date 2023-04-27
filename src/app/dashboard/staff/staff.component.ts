import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { staffSsr } from 'src/app/models/staffSsr';
import { StaffService } from 'src/app/service/staff.service';
import { ProfileComponent } from './profile/profile/profile.component';
import { Staff } from 'src/app/models/staff';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit, AfterViewInit{
  staff: any;
  staffssr : staffSsr;
  staffDetails : Staff;
  ssrStatus : string;
  btnState : boolean = false;
  archivedSsrs : staffSsr[] = [];

  @ViewChild(ProfileComponent) profileCompData : any;
  

  constructor(private staffService: StaffService, private toaster: ToastrService){

  }
  ngAfterViewInit(): void {
    this.staffDetails = this.profileCompData.staff;
  }


  ngOnInit(): void {

    this.archivedSsrs = this.staffService.staffSsrs;

    console.log(this.archivedSsrs);
    console.log(this.ssrStatus);

    this.staffService.ssrStatus$.subscribe({
      next : (data) => {
        this.ssrStatus = data;
      }
    })
    
    this.staffService.getSsrDetailsForStaff(localStorage.getItem("token")).subscribe({
      next : (data) => {
        console.log(data);
        this.staffssr = data;
      },
      error : (err) => {
        console.log(err);
      }
    })
  }

  archiveStatus() {
    this.btnState = true;
    if(this.staffDetails.id === this.staffssr.sid) {
      this.staffService.updateSourceStaffStatus(this.staffssr.sid).subscribe({
        next : (data) => {
          console.log(this.staffDetails);
          console.log("SSR DATA ", data);
          this.toaster.success("SSR status changed to departed");
          this.staffService.ssrStatus$.next(data.ssrStatus);
          this.staffService.staffStatus$.next("AVAILABLE");
        },
        error : (err) => {
          console.log(err);
          this.toaster.error(err.error.message)
        } 
      })
    } else if(this.staffDetails.id === this.staffssr.did) {
      console.log("IN DESTINATION STAFF")
      this.staffService.updateDestinationStaffStatus(this.staffssr.did).subscribe({
        next : (data) => {
          console.log("SSR DATA ", data);
          this.toaster.success("SSR Archived");
          this.staffService.ssrStatus$.next(data.ssrStatus);
          this.staffService.staffStatus$.next("AVAILABLE");
          console.log(this.staffssr.isArcived);
          this.staffssr = {
            id: this.staffssr.id,
            pname: this.staffssr.pname,
            pcontact: this.staffssr.pcontact,
            sid: this.staffssr.sid,
            did: this.staffssr.did,
            stNumber: this.staffssr.stNumber,
            flightNo: this.staffssr.flightNo,
            fromDateTime: this.staffssr.fromDateTime,
            toDateTime: this.staffssr.toDateTime,
            flStatus: this.staffssr.flStatus,
            ssrStatus: this.ssrStatus,
            terminalNo: this.staffssr.terminalNo,
            isArcived: this.staffssr.isArcived
          }
          console.log(this.staffssr);
          this.staffService.addToArchiveStatus(this.staffssr);
          console.log(this.archivedSsrs);
        },
        error : (err) => {
          console.log(err);
          this.toaster.error(err.error.message)
        } 
      })
    }
    
  }

}
