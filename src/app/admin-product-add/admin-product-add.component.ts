import { Component, OnInit } from '@angular/core';
import{AddCake} from './admin';
import{FormGroup,FormControl} from '@angular/forms';
import{DataService} from '../data.service';
import {HttpClient}from '@angular/common/http';



@Component({
  selector: 'app-admin-product-add',
  templateUrl: './admin-product-add.component.html',
  styleUrls: ['./admin-product-add.component.css']
})
export class AdminProductAddComponent implements OnInit {
  form:FormGroup
  AddCake:AddCake[]=[]

 
  //for uploading file
  selectedFile:File=null;
  onFileSelected(event)
  {
    //console.log(event);
    this.selectedFile=<File>event.target.files[0];
  }    
  onUpload()
  {
    /*const fd=new FormData();
    fd.append(this.form.value.cake_img,this.selectedFile,this.selectedFile.name);
    this.httpclient.post('http://localhost:8888/addCake',fd).subscribe(res=>
      {
        console.log(res);
        
      });
      */
     //this.form.get('cake_img').value(this.selectedFile.name);
       //console.log(this.selectedFile.name);
       this.form.value.cake_img="../../assets/cakes/"+this.selectedFile.name;
       console.log(this.form.value.cake_img);

  }


  constructor(private dataservice:DataService,private httpclient:HttpClient) { }
  cake_category:string[]=["Cake","Birthday Cake","Annivarsary cake","CupCake","Pastries"]

  ngOnInit(): void {
    this.form=new FormGroup
    ({
  
      cake_name:new FormControl(""),
      cake_img:new FormControl(""),
      cake_price:new FormControl(""),
      cake_category:new FormControl(this.cake_category[1])
    
    })
    
   
  }

  

  register()
  {
    this.AddCake.push(this.form.value);
    this.dataservice.saveData(this.form.value).subscribe((res)=>alert("Cake Details Saved Successfullly"));

  }

}
