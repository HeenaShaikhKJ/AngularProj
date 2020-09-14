import { Component, OnInit } from '@angular/core';



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

 
  constructor(private dataservice:DataService,private activatedroute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
     
    this.activatedroute.params.subscribe((param)=>
    {
       this.name=param["name"]
       this.userdata=this.name
      /* this.dataservice.getUserByI(this.id).subscribe((data)=>
       {
         this.userdata=data

           this.form=new FormGroup(
             {
               user_name:new FormControl(this.userdata.user_name)

             }
           )
        



       }
       )*/ 
       

       
     
       
    }
    )





   
  }

}
