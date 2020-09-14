import { Component, OnInit } from '@angular/core';
import{ adminDetails} from './adminlogin';
import{FormGroup,FormControl} from '@angular/forms';
import{DataService} from '../data.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  form:FormGroup
  adminDetails:adminDetails[]=[]

  admindet: any=[];
     getAdminDetails()
     {
      this.dataservice.getAdminData().subscribe((res)=>
      {
          this.admindet=res;
      }) 
     }
  


  constructor(private dataservice:DataService,private router:Router) { }

  ngOnInit(): void {

    this.form=new FormGroup
    ({
  
      admin_name:new FormControl(""),
      admin_password:new FormControl("")
      
    
    })

    this.getAdminDetails()
  }

  CheckAdmin()
  {
       if(this.form.value.admin_name=="heena"&& this.form.value.admin_password=="123")
       {
           //alert("Welcome Admin");
           this.router.navigate(['/','adminshow']);
     
       }  
       else
       {
         alert("Invalid admin");

       }
      

      //this.adminDetails.push(this.form.value);
    //this.dataservice.adminCheckData(this.form.value).subscribe((res)=>alert("admin login successfully"))

  }

}
