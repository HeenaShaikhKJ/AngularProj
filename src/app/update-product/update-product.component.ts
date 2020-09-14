import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl} from '@angular/forms';
import{DataService} from '../data.service';
import {HttpClient}from '@angular/common/http';
import{ActivatedRoute,Data,Router}from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

       form:FormGroup
       product:any=[]
       id:number
       updateProduct()
       {
          this.dataservice.updateProduct(this.id,this.form.value).subscribe
          ((res)=>
          {
             alert("Product updated Successfully")
             this.router.navigateByUrl("/adminshow")
          })
       }
        //for uploading file
  selectedFile:File=null;
  onFileSelected(event)
  {
    //console.log(event);
    this.selectedFile=<File>event.target.files[0];
  }    
  onUpload()
  {
    
       this.form.value.cake_img="../../assets/cakes/"+this.selectedFile.name;
       console.log(this.form.value.cake_img);

  }

  constructor(private dataservice:DataService,private activatedroute:ActivatedRoute,private router:Router,private httpclient:HttpClient) { }

  cake_category:string[]=["Cake","Birthday Cake","Annivarsary cake","CupCake","Pastries"]

  ngOnInit(): void 
  {
         this.activatedroute.params.subscribe((param)=>
         {
           this.id=param["id"]
           this.dataservice.getProductById(this.id).subscribe((data)=>
           {
             this.product=data
             this.form=new FormGroup(
               {

                cake_name:new FormControl(this.product.cake_name),
                //cake_img:new FormControl(this.product.cake_img),
                cake_price:new FormControl(this.product.cake_price),
                cake_category:new FormControl(this.product.cake_category[1])
               })
           })

         })
    
  }
}
