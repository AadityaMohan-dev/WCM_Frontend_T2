import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/LogIn/login/login.component';
import { StaffComponent } from './dashboard/staff/staff.component';
import { PassengerComponent } from './dashboard/Passenger/passenger/passenger.component';
import { StationComponent } from './dashboard/station/station/station.component';
import { PaymentComponent } from './dashboard/passenger/payment/payment.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'staff', component: StaffComponent },
  { path: 'passenger', component: PassengerComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'station', component: StationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
