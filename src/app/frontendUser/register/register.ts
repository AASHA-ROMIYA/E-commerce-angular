import { Component, OnInit } from '@angular/core';
import { User } from '../../service/user/user';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register implements OnInit{
  customerList:any[]=[];
  customer:any={
  "custId": 0,
  "name": "",
  "mobileNo": "",
  "password": ""
}
  constructor(private userService:User,private route:Router){}
  ngOnInit(): void {
      this.getAllCustomer();
  }
  getAllCustomer(){
    this.userService.getAllCustomer().subscribe((res:any)=>{
      this.customerList=res.data;
      console.log(this.customerList);
    })
  }
  register(){
    // this.customer.custId=this.customerList.length+1;
    this.userService.addUser(this.customer).subscribe((res:any)=>{
      
      if(res.result){
        alert("registration success!!");
        this.getAllCustomer();
      }
      else{
        console.log(res.message);
      }
     
    })
  }
  login(){
      this.route.navigate(['/']);
  }

}
