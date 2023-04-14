import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  msg: string;

  constructor(private userService: UserService, private router: Router) { }
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)])
    });
  }


  loginUser() {
    let userInfo: User = {
      username: this.loginForm.value.email,
      password: this.loginForm.value.password
    };
    let token = window.btoa(userInfo.username + ':' + userInfo.password);
    this.userService.login(userInfo, token).subscribe({
      next: (data) => {
        localStorage.setItem('token', token),
          localStorage.setItem('role', data.role),
          localStorage.setItem('email', data.username);

        switch (data.role) {
          case "STAFF":
            this.router.navigateByUrl("/staff")
            break;

          case "STATION":
            this.router.navigateByUrl("/station")
            break;

          case "AIRLINE":
            this.router.navigateByUrl("/airline")
            break;

          case "PASSENGER":
            this.router.navigateByUrl("/passenger")
            break;

          default:
            localStorage.clear();
            this.router.navigateByUrl("/login")
            break;
        }
      },
      error: (error) => {
        this.msg = 'Invalid Credentials';
        localStorage.clear();
      }

    });
  }
}