import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../service/product/product-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-category',
  imports: [CommonModule],
  templateUrl: './product-category.html',
  styleUrl: './product-category.css',
})
export class ProductCategory implements OnInit {
   activatedId=0;
   productList:any[]=[];
   custId=0;
  constructor(private activateroute:ActivatedRoute,private productService:ProductService){
    this.activateroute.params.subscribe((res:any)=>{
    this.activatedId=res.id;
     console.log(this.activatedId)
     this.getAllProductByCat();
    }
  )
  }
  
     ngOnInit(): void {
        const list = JSON.parse(localStorage.getItem('user') || '{}');
     this.custId=list.custId;
     }
     getAllProductByCat(){
      this.productService.getProductByCatId(this.activatedId).subscribe((res:any)=>{
        this.productList=res.data;
        console.log(this.productList)
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
