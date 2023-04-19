import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit{
  loginForm: FormGroup;
  msg: string;

  bgImg = "../assets/paymentImg.png"

  constructor( private router: Router, private toastr: ToastrService) { }
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email : new FormControl('',[Validators.required,Validators.email]),
      cardOwnerName : new FormControl('',[Validators.required]),
      Phone : new FormControl('',[Validators.required,Validators.pattern(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g)]),
      cardNumber : new FormControl('', [Validators.required, Validators.pattern(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g)])
    });
  }


}
