import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/LogIn/login/login.component';
import { StaffComponent } from './dashboard/staff/staff.component';
import { PassengerComponent } from './dashboard/Passenger/ticket_booking/passenger.component';
import { StationComponent } from './dashboard/station/station/station.component';
import { PaymentComponent } from './dashboard/Passenger/payment/payment.component';
import { AirlineComponent } from './dashboard/airline/airline.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'staff', component: StaffComponent },
  { path: '', component: PassengerComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'station', component: StationComponent },
  {path: 'airline', component:AirlineComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
