import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl} from '@angular/forms';
import{DataService} from '../data.service';
import{Router} from '@angular/router';
import{billingDet}from './billingDet';

@Component({
  selector: 'app-productpayement',
  templateUrl: './productpayement.component.html',
  styleUrls: ['./productpayement.component.css']
})
export class ProductpayementComponent implements OnInit {
  billingDet:billingDet[]=[];
  form:FormGroup
  result:string
  ulist:any=[];
  constructor(private dataservice:DataService,private router:Router) { }
  productOrder()
  {

    const bdata={

      name:this.form.value.name,
      email:this.form.value.email,
      mobile:this.form.value.mobile,
      address:this.form.value.address,
      city:this.form.value.city,
      country:this.form.value.country,
      cardname:this.form.value.cardname,
      cardnumber:this.form.value.cardnumber,
      cardmonth:this.form.value.cardmonth,
      emonth:this.form.value.emonth,
      eyear:this.form.value.eyear,
      cvv:this.form.value.cvv


  
    };
      console.log(bdata);
      this.dataservice.saveUserBillingAddress(bdata).subscribe((res)=>
      {
           
            this.ulist=res;
            alert("Order Confirmed......Delivered in next 5 days")
            this.router.navigate(['/userlogin']);
          
           
      }) 



  }

  ngOnInit(): void 
  {

    this.form=new FormGroup
    ({
  
      name:new FormControl(""),
      email:new FormControl(""),
      mobile:new FormControl(""),
      address:new FormControl(""),
      city:new FormControl(""),
      country:new FormControl(""),
      cardname:new FormControl(""),
      cardnumber:new FormControl(""),
      cardmonth:new FormControl(""),
      emonth:new FormControl(""),
      eyear:new FormControl(""),
      cvv:new FormControl("")

    })




  }

}
