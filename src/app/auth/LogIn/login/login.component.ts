import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = "SignIn";
  loginForm = new FormGroup({
    email : new FormControl('',[Validators.required,Validators.email]),
    password : new FormControl('',[Validators.required,Validators.minLength(4)])
  })

  loginUser(){
    // let userInfo: UserInfo ={
    //   email: this.loginForm.value.email,
    //   password: this.loginForm.value.password
  };

  get userEmail(){
    return this.loginForm.get('email');
  }

  get userPassword(){
    return this.loginForm.get('password');
  }

}
