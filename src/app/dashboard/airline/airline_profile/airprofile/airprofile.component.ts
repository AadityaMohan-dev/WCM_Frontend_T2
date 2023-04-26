import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Airline } from 'src/app/models/airline';
import { AirlineService } from 'src/app/service/airline.service';
import { StationService } from 'src/app/service/station.service';



@Component({
  selector: 'app-airprofile',
  templateUrl: './airprofile.component.html',
  styleUrls: ['./airprofile.component.css']
})
export class AirprofileComponent implements OnInit{
  airline : Airline;
  profileImg = "../assets/airplane.png";
  toaster: any;

  constructor(private airlineService : AirlineService,
              private router : Router,
              private stationService : StationService ){}
  ngOnInit(): void {
    this.airlineService.getAirlineByUserName('token').subscribe({
      next : (data) =>{
      console.log(data);
      this.airline=data;
   },
   error:(err) =>{
    console.log(err);
   }
   });
  }
  OnLogout(){
    localStorage.clear();
    this.router.navigate(['/login']);
    }

    onClick() {
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
