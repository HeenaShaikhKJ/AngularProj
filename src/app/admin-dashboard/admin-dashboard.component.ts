import { Component, OnInit } from '@angular/core';
import{DataService} from '../data.service';
import{AddCake}from '../admin-product-add/admin';



@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  AddCake:any;
  getCakeData()
  {
   this.dataservice.getData().subscribe((res)=>
   {
       this.AddCake=res;
   }) 
  }

  product:any=[]
  deleteProduct(id)
  {
    this.dataservice.deleteProduct(id).subscribe((res)=>
    {
      alert("data deleted successfully")
      this.getCakeData()
    }
    )

  }

  constructor(private dataservice:DataService) { }

  ngOnInit(): void {
    this.getCakeData()
  }

}
