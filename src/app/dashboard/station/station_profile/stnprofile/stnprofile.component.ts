import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Station } from 'src/app/models/station';
import { StationService } from 'src/app/service/station.service';

@Component({
  selector: 'app-stnprofile',
  templateUrl: './stnprofile.component.html',
  styleUrls: ['./stnprofile.component.css']
})
export class StnprofileComponent implements OnInit{
  
  station : Station;
  profileImg = "../assets/station profile.png";
  constructor(private stationService : StationService,private router : Router){}
  ngOnInit(): void {
    this.stationService.getStationByUserName(localStorage.getItem('token')).subscribe({
      next : (data) => {
        console.log(data);
        this.station=data;
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
  

}
