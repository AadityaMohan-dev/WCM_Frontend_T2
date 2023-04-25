import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  userId: number;
  msg: any;
  signupSuccess: boolean = false;
  constructor(private signup : UserService, private route: ActivatedRoute, private toaster: ToastrService){}
  ngOnInit(): void {

    this.signupForm = new FormGroup({
      name : new FormControl(''),
      username : new FormControl(''),
      contact : new FormControl(''),
      email : new FormControl(''),
      password : new FormControl(''),
 });
    
  }

  onSubmit(){
    this.addstaff ={
      name : this.signupForm.value.name,
      username : this.signupForm.value.name,
      contact : this.signupForm.value.contact,
      email : this.signupForm.value.email,
      password : this.signupForm.value.password,
    };

    this.signup.staffSignup(this.addstaff, localStorage.getItem('userId'))
    .subscribe({
      next : (data)=>{
        console.log(data.message);
        this.toaster.success(data.message);
      },
        error: (error)=>{
          this.msg=error.msg;
          console.log(error);
          this.toaster.error(error.error.mmessage);
        }

    })

  }

  bgImg = "../assets/station profile.png";

  staffcode : string;

}
