import { Component, OnInit } from '@angular/core';
import{DataService} from '../data.service';
import{userRegisterDet}from '../user-registration/UserRegisterDet';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {


  userdata:any;
  getUserData()
  {
   this.dataservice.getUserData().subscribe((res)=>
   {
       this.userdata=res;
   }) 
  }
  constructor(private dataservice:DataService) { }

  ngOnInit(): void {
    this.getUserData();
  }

}
