import { Component, OnInit } from '@angular/core';
import{userDetails} from './userDetails';

import{userRegisterDet}from '../user-registration/UserRegisterDet';
import{FormGroup,FormControl} from '@angular/forms';
import{DataService} from '../data.service';
import{Router} from '@angular/router';


@Component({
  selector: 'app-userlogin',         
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  form:FormGroup
  //userRegisterDet:userRegisterDet[]=[]
  userlogindet:any=[]
   Username:string;
   userdata:any=[];

  
  /*userdet: any=[];
     getUserDetails()
     {
      this.dataservice.getUserData().subscribe((res)=>
      {
          this.userdet=res;
      }) 
     }
  */

 checkUser()
 {
   const udata={

                  username:this.form.value.user_name,
                  password:this.form.value.user_password

                };
   console.log(udata);

   
    this.dataservice.userlogin(udata).subscribe((res)=>
    {
          this.userlogindet=res;
          console.log(this.userlogindet);
          alert("Login Successful");

        this.userdata.push(this.userlogindet);
        

       this.router.navigate(['/userview']);
          
          /*this.Username=res;
         console.log(this.Username);
         alert("Login Successful");
         this.router.navigate(['/userview',this.Username]);
         */

        
  
    })  

 }

  constructor(private dataservice:DataService,private router:Router) { }

  ngOnInit(): void 
  {
    var userdata1=JSON.stringify(this.userdata);
        sessionStorage.setItem('udata',userdata1);
        console.log(userdata1);

    this.form=new FormGroup
    ({
      user_name:new FormControl(""),
      user_password:new FormControl("")
      
    })
   //this.getUserDetails()
  }

}

  /* this.userdet.push(this.form.value);
       console.log(this.userdet);
     
       var r:number=1;
       var i:number;
      for(i=0;i<this.userdet.length;i++)
      {
        
        if(this.form.value.user_name==this.userdet[i].user_name && this.form.value.user_password==this.userdet[i].user_password)
          {
            //r++;
            //break;
            //this.router.navigate(['/','userview']);
            this.router.navigate(['/userview',this.userdet[i].user_name]);
            
          }  
          else
          {
           r--;
          }
      }*/
