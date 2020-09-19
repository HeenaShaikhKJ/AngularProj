import { Component, OnInit } from '@angular/core';
import{userRegisterDet} from './UserRegisterDet';
import{FormGroup,FormControl} from '@angular/forms';
import{DataService} from '../data.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  form:FormGroup
  userRegisterDet:userRegisterDet[]=[];

  ulist:any=[];
  constructor(private dataservice:DataService,private router:Router) { }


  /*registerUser()
  {
    this.userRegisterDet.push(this.form.value);
    this.dataservice.saveUserData(this.form.value).subscribe((res)=>alert("User Register successfully"));

  }
  */

  

 registerUser()
 { 
  const udata={

    name:this.form.value.user_name,
    password:this.form.value.user_password,
    gender:this.form.value.user_gender,
    mobile:this.form.value.user_mobile,
    email:this.form.value.user_email,
    address:this.form.value.user_address

  };
    console.log(udata);
    this.dataservice.saveuserdetails(udata).subscribe((res)=>
    {
          this.ulist=res;
          console.log(this.ulist);
          alert("Successfully registered now you can login")
          this.router.navigate(['/userlogin']);
        
         
    }) 
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
