import { Component,Input, OnInit } from '@angular/core';
import{DataService} from '../data.service';
import{userRegisterDet}from '../user-registration/UserRegisterDet';
import{ActivatedRoute,Router} from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  userdata:any=[];
  id:number;
  name:string;
  form:FormGroup;

 
  //check;
  
  constructor(private dataservice:DataService,private activatedroute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
       
    this.userdata=JSON.parse(sessionStorage.getItem('udata'));
    console.log(this.userdata); 
      
      /*this.dataservice.getValidUserWelcome().subscribe((res)=>
      {
         this.name=res;
         console.log(this.name);
      })
      */

     /*this.activatedroute.params.subscribe((param)=>
     {
       this.name=param["name"]
       

     }) 
     */
    
   
    
    
  }

}







