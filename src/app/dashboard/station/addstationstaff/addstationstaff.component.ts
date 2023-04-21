import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-addstationstaff',
  templateUrl: './addstationstaff.component.html',
  styleUrls: ['./addstationstaff.component.css']
})
export class AddstationstaffComponent implements OnInit {
  signupForm: FormGroup;
  msg:string;
  signupSuccess: boolean = false;

  bgImg = "../assets/station profile.png";

  constructor() { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      name : new FormControl('',[Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]),
      email : new FormControl('',[Validators.required,Validators.email]),
      password : new FormControl('',[Validators.required, Validators.minLength(4)]),
      jobTitle: new FormControl('', Validators.required),
      managerId: new FormControl('',Validators.required)
    });

    /* Call the API and fetch all manager details */
//     this.managerService.fetchAllManagers().subscribe({
//       next: (data)=>{
//         this.managerArry = data;
//        },
//       error: ()=>{ }
//     });
//   }

//   onFormSubmit(){
//       /* CALL THE API to post employee details */
//       this.employee = {
//         name: this.signupForm.value.name,
//         username: this.signupForm.value.email,
//         password: this.signupForm.value.password,
//         jobTitle: this.signupForm.value.jobTitle
//       };

//       this.authService.postEmployee(this.employee,this.signupForm.value.managerId)
//       .subscribe({
//         next: (data)=>{
//            this.msg='Signup Success';
//            this.signupSuccess = true;
//         },
//         error: (error)=>{
//           this.msg=error.msg;
//         }
//       });
  }

}


