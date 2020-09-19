import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import{DataService} from '../data.service';
import{AddCake}from '../admin-product-add/admin';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  AddCake: any=[];
 
  cardData:any=[];

     getCakeData()
     {
      this.dataservice.getData().subscribe((res)=>
      {
          this.AddCake=res;
      }) 
     }
   

     addToCart(AddCake) 
     {
      this.cardData.push(AddCake);
      var productdata=JSON.stringify(this.cardData);
      sessionStorage.setItem('cardData',productdata);
      console.log(AddCake);
      window.alert('Your product has been added to the cart!');
    }
    

    



     
  
  constructor(config: NgbCarouselConfig,private dataservice:DataService,private route: ActivatedRoute) {
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }
  imgPath1="../../assets/coverimg/cover1.jpg";
  imgPath2="../../assets/coverimg/cover2.jpg";
  imgPath3="../../assets/coverimg/cover3.jpg";

 
  
  ngOnInit(): void {
    this.getCakeData()
    
  }

}
