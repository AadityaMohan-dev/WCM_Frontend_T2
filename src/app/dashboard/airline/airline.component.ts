import { Component, OnInit } from '@angular/core';
import { Staff } from 'src/app/models/staff';
import { WheelChair } from 'src/app/models/wheelchair';
import { AirlineService } from 'src/app/service/airline.service';

@Component({
  selector: 'app-airline',
  templateUrl: './airline.component.html',
  styleUrls: ['./airline.component.css']
})
export class AirlineComponent implements OnInit{
  staffs : Staff[];
  wcs : WheelChair[];

  constructor(private airlineservice : AirlineService){}
  ngOnInit(): void {
    this.airlineservice.getAirlineStaff(localStorage.getItem("token")).subscribe({
      next : (data) =>{
        console.log(data);
        this.staffs = data;
      },
      error :(err)=>{
        console.log(err);
      }
    });
  
    this.airlineservice.getAirlineWheelChair(localStorage.getItem("token")).subscribe({
      next : (data) =>{
        console.log(data);
        this.wcs = data;
      },
      error :(err)=>{
        console.log(err);
      }
    });
  
  }

}
