import { Component, OnInit } from '@angular/core';
import { Staff } from 'src/app/models/staff';
import { WheelChair } from 'src/app/models/wheelchair';
import { StationService } from 'src/app/service/station.service';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.css']
})
export class StationComponent implements OnInit{
  constructor(private stationservice : StationService){}
  staffs : Staff[];
  wcs : WheelChair[];
  ngOnInit(): void {
    this.stationservice.getStationStaff(localStorage.getItem("token")).subscribe({
      next : (data) =>{
        console.log(data);
        this.staffs = data;
      },
      error :(err)=>{
        console.log(err);
      }
    });
  
    this.stationservice.getStationWheelChair(localStorage.getItem("token")).subscribe({
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
