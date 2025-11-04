import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http:HttpClient){}
  getAllProducts(){
    return this.http.get('/api/api/amazon/GetAllProducts');
  }
  getAllcategories(){
    return this.http.get('/api/api/amazon/GetAllCategory')
  }
  getProductByCatId(id:number){
    return this.http.get('/api/api/amazon/GetAllProductsByCategoryId?id='+id);
  }
  addToCart(obj:any){
      return this.http.post('/api/api/amazon/AddToCart',obj)
  }
  getCartItemByUser(id:number){
    return this.http.get('/api/api/amazon/GetCartProductsByCustomerId?id='+id);
  }
  deleteCartByProductId(id:number){
    return this.http.get('/api/api/amazon/DeleteProductFromCartById?id='+id);
  }
  placeOrder(obj:any){
    return this.http.post('/api/api/amazon/PlaceOrder',obj)
  }
}
