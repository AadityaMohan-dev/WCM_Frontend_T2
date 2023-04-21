import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
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
  contactForm:FormGroup;
  flightId: number;


  constructor(private flightservice : FlightService,private fb:FormBuilder){}
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

    this.contactForm = this.fb.group({
      from : null,
      to : null,
      start : null,
      completed : null,
      ssr : null,
    });

    

  }
  submit(){
    console.log("form submited")
    console.log(this.contactForm.value)
    localStorage.setItem('data' , this.contactForm.value)
    
  }

  onFlightSelect(event: any) {
    this.flightId = event.target.value;
    console.log(this.flightId);
  }


}


