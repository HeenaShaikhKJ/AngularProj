import { Component, OnInit } from '@angular/core';
import{userRegisterDet} from './UserRegisterDet';
import{FormGroup,FormControl} from '@angular/forms';
import{DataService} from '../data.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  form:FormGroup
  userRegisterDet:userRegisterDet[]=[];

  constructor(private dataservice:DataService) { }


  registerUser()
  {
    this.userRegisterDet.push(this.form.value);
    this.dataservice.saveUserData(this.form.value).subscribe((res)=>alert("User Register successfully"));

  }

  ngOnInit(): void 
  {
    this.form=new FormGroup
    ({
  
      user_name:new FormControl(""),
      user_password:new FormControl(""),
      user_gender:new FormControl(""),
      user_email:new FormControl(""),
      user_mobile:new FormControl(""),
      user_address:new FormControl("")    
    })

  }

}
