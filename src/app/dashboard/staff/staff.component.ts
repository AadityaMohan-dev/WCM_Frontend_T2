import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit{
  staff: any;
  

  constructor(private http : HttpClient){}
  ngOnInit(): void {
    let respose = this.http.get('');
    respose.subscribe((data)=>this.staff = data);
  }

}
