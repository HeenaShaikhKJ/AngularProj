import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';
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

items=[];

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }



 

  constructor(private httpclient:HttpClient) { }
}
