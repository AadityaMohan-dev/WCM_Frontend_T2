import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { addwc } from 'src/app/models/addwc';
import { AddwcService } from 'src/app/service/addwc.service';

@Component({
  selector: 'app-add-wc',
  templateUrl: './add-wc.component.html',
  styleUrls: ['./add-wc.component.css']
})
export class AddWcComponent implements OnInit{
  
  wcForm : FormGroup;
  addwc : addwc;
  msg : string;
  userId : string;
  bgImg : '../assets/Wheelchair.png'
  
  constructor(private wcService : AddwcService, private toaster: ToastrService){}
  ngOnInit(): void {
    this.wcForm = new FormGroup({
      wc_code : new FormControl(''),
      wc_status : new FormControl('')
    });
    }

    submit(){
      this.addwc ={
        wc_code : this.wcForm.value.wc_code,
        wc_status : this.wcForm.value.wc_status
      };
      this.wcService.addWheelchair(this.addwc,localStorage.getItem(this.userId))
      .subscribe({
        next : (data)=>{
          console.log(localStorage.getItem(this.userId))
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

  }
