import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Airline } from 'src/app/models/airline';
import { AirlineService } from 'src/app/service/airline.service';



@Component({
  selector: 'app-airprofile',
  templateUrl: './airprofile.component.html',
  styleUrls: ['./airprofile.component.css']
})
export class AirprofileComponent implements OnInit{
  airline : Airline;
  profileImg = "../assets/airplane.png";

  constructor(private airlineService : AirlineService,private router : Router){}
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
}
