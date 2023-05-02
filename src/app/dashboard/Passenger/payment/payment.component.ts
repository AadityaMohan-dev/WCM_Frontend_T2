import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Passenger } from 'src/app/models/passenger';
import { PassengerService } from 'src/app/service/passenger.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit{
  loginForm: FormGroup;
  msg: string;
  flightId: number;
  passengerDetails: Passenger;
  passengerDB: Passenger;

  bgImg = "../assets/paymentImg.png"

  constructor( private router: Router,
               private toastr: ToastrService, 
               private route: ActivatedRoute,
               private passengerService: PassengerService) { }
  ngOnInit(): void {

    this.flightId = this.route.snapshot.params['id'];
    console.log(this.flightId);

    this.loginForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email : new FormControl('',[Validators.required,Validators.email]),
      cardOwnerName : new FormControl('',[Validators.required]),
      Phone : new FormControl('',[Validators.required,Validators.pattern(/^[0-9]{10}$/g)]),
      cardNumber : new FormControl('', [Validators.required, Validators.pattern(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g)])
    });
  }
  Submit(){
    console.log("INSIDE FORM SUBMIT");
    this.passengerDetails = {
      name : this.loginForm.value.name,
      email : this.loginForm.value.email,
      contact : this.loginForm.value.Phone
    }
    console.log(this.passengerDetails);

    this.passengerService.addPassenger(this.passengerDetails, this.flightId).subscribe({
      next : (data) => {
        console.log(data);
        this.toastr.success("Ticket Booked Successfully");
        this.passengerDB = data;

        this.passengerService.addSsr(this.passengerDB.id).subscribe({
          next : (data) => {
            this.toastr.success(data.message);
          },
          error : (err) => {
            console.log(err);
            this.toastr.error(err.error.message);
          }
        })
      },
      error : (err) => {
        console.log(err);
        this.toastr.error(err.error.message);
      }
    })

    this.router.navigateByUrl(`/`);
  }

}
