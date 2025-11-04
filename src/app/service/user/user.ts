import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class User {
  constructor(private http:HttpClient){}
  getAllCustomer(){
    return this.http.get('/api/api/amazon/GetAllCustomer');
  }
  addUser(obj:any){
     return this.http.post('/api/api/amazon/RegisterCustomer',obj);
  }
  loginUser(obj:any){
    return this.http.post('/api/api/amazon/Login',obj);
  }
  
  
}
