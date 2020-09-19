
import {HttpClient}from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import{AddCake} from './admin-product-add/admin';






const api:string="http://localhost:8888/addCake/";
const api1:string="http://localhost:9999/userDetails/";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //cake
  saveData(data)
  {
    return this.httpclient.post(api,data);
  }
  getData()
  {
    return this.httpclient.get(api);
  }

  getAdminData()
  {
    return this.httpclient.get(api);
  }

//json methods
  saveUserData(data)
  {
    return this.httpclient.post(api1,data);
  }
  getUserData()
  {
    return this.httpclient.get(api1);
  }
  getUserById(id)
  {
    return this.httpclient.get(api1+id)
  }


  //user get


  userlogin(userdata) 
  {
    return this.httpclient.post("http://localhost/cakeshop/UserLogin.php",userdata,{responseType: 'text'});
   // return this.http.post('http://10.0.1.19/login',{email, password},{responseType: 'text'});
  }
  getValidUserWelcome()
  {
    return this.httpclient.get("http://localhost/cakeshop/welcome.php",{responseType: 'text'});
  }
  getValidUserProfile(name)
  {
    return this.httpclient.post("http://localhost/cakeshop/profile.php",name,{responseType: 'text'}); 
  }

   saveuserdetails(userdata)
   {
    return this.httpclient.post("http://localhost/cakeshop/register.php",userdata,{responseType: 'text'});
   }
   saveUserBillingAddress(billingdata)
   {
       return this.httpclient.post("http://localhost/cakeshop/billingdetails.php",billingdata,{responseType: 'text'});
   }



  getProductById(id)
  {
    return this.httpclient.get(api+id)
  }
  updateProduct(id,data)
  {
       return this.httpclient.put(api+id,data)
  }
  deleteProduct(id)
  {
    return this.httpclient.delete(api+id)
  }
  

//cart


  //customer details
  getCustomerDetails()
  {
    return this.httpclient.get("http://localhost/cakeshop/GetUsers.php");
  }

  constructor(private httpclient:HttpClient) { }
}
