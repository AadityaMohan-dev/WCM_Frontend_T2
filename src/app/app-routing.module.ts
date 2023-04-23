import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/LogIn/login/login.component';
import { StaffComponent } from './dashboard/staff/staff.component';
import { PassengerComponent } from './dashboard/Passenger/ticket_booking/passenger.component';
import { StationComponent } from './dashboard/station/station/station.component';
import { PaymentComponent } from './dashboard/Passenger/payment/payment.component';
import { AirlineComponent } from './dashboard/airline/airline.component';
import { AddStaffComponent } from './dashboard/add-staff/add-staff.component';
import { AddWheelchairComponent } from './dashboard/add-wheelchair/add-wheelchair.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'staff', component: StaffComponent },
  { path: '', component: PassengerComponent },
  { path: 'payment/:id', component: PaymentComponent },
  { path: 'station', component: StationComponent },
  {path: 'airline', component:AirlineComponent},
  {path : 'add/staff',component : AddStaffComponent},
  {path : 'add/wc', component : AddWheelchairComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
