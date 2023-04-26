import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Station } from 'src/app/models/station';
import { StationService } from 'src/app/service/station.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-stnprofile',
  templateUrl: './stnprofile.component.html',
  styleUrls: ['./stnprofile.component.css']
})
export class StnprofileComponent implements OnInit{
  
  station : Station;
  userId: ScrollSetting;
  profileImg = "../assets/station profile.png";
  constructor(private stationService : StationService,
              private userService: UserService, 
              private router : Router,
              private toaster : ToastrService){}
  ngOnInit(): void {


    this.stationService.getStationByUserName(localStorage.getItem('token')).subscribe({
      next : (data) => {
        console.log(data);
        this.station=data;
        this.stationService.stationCode$.next(this.station.name);
      },
      error : (err) => {
        console.log(err);
      }
    })
  }
  OnLogout(){
    localStorage.clear();
    this.router.navigate(['/login']); 
    }

  onClick(){
    this.stationService.addWheelchair(localStorage.getItem('userId')).subscribe({
      next : (data) => {
        console.log(data);
        this.toaster.success(data.message);
      },
      error : (err) => {
        console.log(err);
      }
    });
  }
  

}
