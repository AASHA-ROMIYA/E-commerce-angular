import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product/product-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  imports: [CommonModule,FormsModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit{
  productList:any[]=[];
  custId:number=0;
  constructor(private productService:ProductService){}
   ngOnInit(): void {
       this.getAllProduct();
     const list = JSON.parse(localStorage.getItem('user') || '{}');
     this.custId=list.custId;
   }
   getAllProduct(){
    this.productService.getAllProducts().subscribe((res:any)=>{
      this.productList=res.data;
    })
   }
   
   

   addToCart(product:any){
    const cart={
        "CartId": 0,
        "CustId": this.custId,
        "ProductId": product.productId,
        "Quantity": 1,
        "AddedDate": new Date()
      }
      this.productService.addToCart(cart).subscribe((res:any)=>{
        if(res.result){
          alert(product.productName+" added to cart");
        }
        else{
          console.log(res.message);
        }
      })
      
   }
}
