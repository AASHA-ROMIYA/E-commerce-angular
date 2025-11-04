import { Component } from '@angular/core';
import { User } from '../../service/user/user';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule,RouterLink,CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login  {

  customer:any={
    "UserName": "",
    "UserPassword": ""
  }
  customerInfo:any={
     "custId": 0,
    "name": "",
    "mobileNo": "",
    "password": ""
  }

  constructor(private userService:User,private route:Router){}

  login() {
  console.log(this.customer);
  this.userService.getAllCustomer().subscribe((res: any) => {
    this.customerInfo = res.data.find((data: any) => {
      return data.name == this.customer.UserName && data.password == this.customer.UserPassword;
    });

    if (this.customerInfo) {
      alert("Login Success!!");
      console.log(this.customerInfo);
      this.saveLocally();
      this.route.navigate(['/products']);
    } else {
      alert("Wrong username or password");
    }
  });
  
}
saveLocally(){
     localStorage.setItem('user',JSON.stringify(this.customerInfo));
}



}
