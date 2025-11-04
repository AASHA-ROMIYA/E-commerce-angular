import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { ProductService } from '../../service/product/product-service';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet,CommonModule,RouterLink],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout implements OnInit{
  categoryList:any[]=[];
  constructor(private productService:ProductService,private route:Router){}
  ngOnInit(): void {
      this.getAllCategpries();
  }
  getAllCategpries(){
      this.productService.getAllcategories().subscribe((res:any)=>{
        this.categoryList=res.data;
      })
  }
  getCategoryList(id:number){
    console.log("came");
   this.route.navigate(['/catrgory',id])
  }
  goHome(){
    this.route.navigate(['/products']);
  }
}
