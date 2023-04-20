import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/models/flight';
import { FlightService } from 'src/app/service/flight.service';

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.css']
})
export class PassengerComponent implements OnInit{

  ticktImg = "../assets/ticketBg.png";
  flights : Flight[];

  constructor(private flightservice : FlightService){}
  ngOnInit(): void {
    this.flightservice.getFlightDetails().subscribe({
      next : (data) =>{
        console.log(data);
        this.flights = data;
      },
      error :(err)=>{
        console.log(err);
      }
    });
  }


}
