import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/LogIn/login/login.component';
import { StaffComponent } from './dashboard/staff/staff.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { ProfileComponent } from './dashboard/staff/profile/profile/profile.component';
import { PassengerComponent } from './dashboard/Passenger/ticket_booking/passenger.component';
import { PaymentComponent } from './dashboard/Passenger/payment/payment.component';
import { StationComponent } from './dashboard/station/station/station.component';
import { RouterModule } from '@angular/router';
import{HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AirlineComponent } from './dashboard/airline/airline.component';
import { ThanksComponent } from './dashboard/passanger/Thankyou/thanks/thanks.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StaffComponent,
    NavbarComponent,
    ProfileComponent,
    PassengerComponent,
    PaymentComponent,
    StationComponent,
    ProfileComponent,
    AirlineComponent,
    ThanksComponent,

  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    CommonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
