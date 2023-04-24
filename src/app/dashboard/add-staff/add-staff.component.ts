import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginComponent } from 'src/app/auth/LogIn/login/login.component';
import { addStaff } from 'src/app/models/addstaff';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css']
})
export class AddStaffComponent implements OnInit{
  signupForm : FormGroup;
  addstaff : addStaff;
  msg: any;
  signupSuccess: boolean = false;
  constructor(private signup : UserService){}
  ngOnInit(): void {
    this.signupForm = new FormGroup({
      name : new FormControl,
      username : new FormControl,
      contact : new FormControl,
      email : new FormControl,
      password : new FormControl,
      code : new FormControl

    });
    
  }

  onSubmit(){
    this.addstaff ={
      name : this.signupForm.value.name,
      username : this.signupForm.value.name,
      contact : this.signupForm.value.phone,
      email : this.signupForm.value.email,
      password : this.signupForm.value.password,
    };

    this.signup.staffSignup(this.addstaff , this.signupForm.value.code)
    .subscribe({
      next : (data)=>{
        this.msg = 'signup success';
        this.signupSuccess = true;
      },
        error: (error)=>{
          this.msg=error.msg;
        }

    })

  }

  bgImg = "../assets/station profile.png";

  staffcode : string;

}
