import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product/product-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  imports: [CommonModule,FormsModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart implements OnInit{
  cartList:any[]=[];
  custId=0;
  constructor(private servce:ProductService){}
  ngOnInit(): void {
     const list = JSON.parse(localStorage.getItem('user') || '{}');
     this.custId=list.custId;
     this.getcartItem();
  }
  getcartItem(){
    this.servce.getCartItemByUser(this.custId).subscribe((res:any)=>{
      if(res.result){
        this.cartList=res.data;
      }
      else{
        alert(res.message);
      }
    })
  }
  placeOrder(){
    if(this.cartList.length==0){
      alert("atleast One product need To place Order!");
      return;
    }
    let sum=0;
    this.cartList.map((data)=>{
      return sum+=data.productPrice
    })
   const cart= {
      "SaleId": 0,
      "CustId": this.custId,
      "SaleDate": new Date(),
      "TotalInvoiceAmount": sum,
      "Discount": 0,
      "PaymentNaration": "string",
      "DeliveryAddress1": "string",
      "DeliveryAddress2": "string",
      "DeliveryCity": "string",
      "DeliveryPinCode": "string",
      "DeliveryLandMark": "string"
    }
    console.log(cart);
    this.servce.placeOrder(cart).subscribe((res:any)=>{
      if(res.result){
        this.removeCartProduct();
        alert("Order Placed Success fully");
        this.getcartItem();
      }
      else{
        alert(res.message);
      }
    })

  }
  removeProduct(id:number){
    const isDelete=confirm("Are you sure to remove from cart?")
     if(isDelete){
      this.servce.deleteCartByProductId(id).subscribe((res:any)=>{
        this.getcartItem();
      })
      }
      else{
        alert("Something went wrong!!");
      }
    }

     removeCartProduct(){
       if(this.cartList.length==0){
      alert("atleast One product need To clear cart!");
      return;
    }
    
      this.cartList.map((data)=>{
         
      this.servce.deleteCartByProductId(data.productId).subscribe((res:any)=>{
        this.getcartItem();
      })})
    }
    
}
