import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    ProfileComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
