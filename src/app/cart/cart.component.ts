import { Component, OnInit } from '@angular/core';
import{DataService} from '../data.service';
import{AddCake}from '../admin-product-add/admin';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  constructor(private dataservice:DataService) { }

  ngOnInit(): void {
    this.items=this.dataservice.getItems();
    
     console.log(this.items.AddCake);
  }

}
