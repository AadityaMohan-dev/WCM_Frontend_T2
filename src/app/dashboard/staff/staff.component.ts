import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { staffSsr } from 'src/app/models/staffSsr';
import { StaffService } from 'src/app/service/staff.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit{
  staff: any;
  staffssr : staffSsr;
  

  constructor(private staffService: StaffService){

  }


  ngOnInit(): void {
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

}
