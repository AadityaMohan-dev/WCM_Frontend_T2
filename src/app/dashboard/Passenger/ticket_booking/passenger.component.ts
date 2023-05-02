import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
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


  constructor(private flightservice : FlightService,private fb:FormBuilder, private router: Router){}
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

    this.contactForm = new FormGroup({
      fromStation: new FormControl(''),
      toStation: new FormControl(),
      start: new FormControl(),
      completed: new FormControl(),
      ssr: new FormControl()
    })

    // this.contactForm = this.fb.group({
    //   from : null,
    //   to : null,
    //   start : null,
    //   completed : null,
    //   ssr : null,
    // });

    

  }
  submit(){
    console.log("form submited")
    console.log(this.contactForm.value)
    this.router.navigateByUrl(`/payment/${this.flightId}`);
    // localStorage.setItem('data' , this.contactForm.value)
    
  }

  onFlightSelect(event: any) {
    this.flightId = event.target.value;
    console.log(this.flightId);
  }


}


