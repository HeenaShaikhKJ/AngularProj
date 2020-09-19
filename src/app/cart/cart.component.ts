import { Component, OnInit } from '@angular/core';
import{DataService} from '../data.service';
import{AddCake}from '../admin-product-add/admin';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  checkoutData:any=[];
  constructor(private dataservice:DataService) { }

  ngOnInit(): void {
    
    this.checkoutData=JSON.parse(sessionStorage.getItem('cardData'));
    console.log(this.checkoutData); 
    console.log(this.checkoutData.length); 
    
  }

}
