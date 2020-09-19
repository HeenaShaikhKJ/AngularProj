import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import{DataService} from '../data.service';
//import { products } from '../products';


@Component({
  selector: 'app-product-order-details',
  templateUrl: './product-order-details.component.html',
  styleUrls: ['./product-order-details.component.css']
})
export class ProductOrderDetailsComponent implements OnInit {
  

  
  constructor( private route: ActivatedRoute,private dataservice:DataService) 
    { }

  ngOnInit(): void {
   
  }

}
