import { Component, OnInit } from '@angular/core';
import { Staff } from 'src/app/models/staff';
import { StaffService } from 'src/app/service/staff.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  staff: Staff;

  profileImg = "../assets/rmxkvbdtrp5v0rcosrev.png"

  constructor(private staffService: StaffService) {

  }

  ngOnInit(): void {
    this.staffService.getStaffByUsername(localStorage.getItem('token')).subscribe({
      next : (data) => {
        console.log(data);
        this.staff = data;
      },
      error : (err) => {
        console.log(err);
      }
    })
  }


}
