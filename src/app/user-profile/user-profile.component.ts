import { Component, OnInit,Input } from '@angular/core';
import{DataService} from '../data.service';
import{userRegisterDet}from '../user-registration/UserRegisterDet';
import{ActivatedRoute,Router} from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  name:string;
  userdata:any=[];
 
  constructor(private dataservice:DataService,private activatedroute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void 
  {
    
    this.activatedroute.params.subscribe((param)=>
    {
      this.name=param["name"]
        
    })  
  const name={
               name:this.name
             };
     console.log(this.name)
      this.dataservice.getValidUserProfile(name).subscribe((res)=>
      {
        this.userdata=res;
        console.log(this.userdata);
      })

  }
  

}
