import { Component, OnInit } from '@angular/core';
import { Product } from '../database/product';
import { ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.page.html',
  styleUrls: ['./product-page.page.scss'],
  standalone: false
})
export class ProductPagePage implements OnInit {

  MyProduct : any

  Quantity = 1 ;

  AddQuantity(){
    this.Quantity++;
  }
  MinusQuantity(){
    this.Quantity--;
    if(this.Quantity < 1){
      this.Quantity = 1;
    }
  }
  constructor( private product: Product , private GetRoute : ActivatedRoute) 
  { 
    var id = this.GetRoute.snapshot.paramMap.get("productid")
    
    if(id == null){
      return;
    }
    this.MyProduct = product.findProduct(Number(id))
  }


  Addtocart(){
    this.product.Addtocart(
      {MyProduct : this.MyProduct,
        Quantity : this.Quantity,
      }
    );
  }

  ngOnInit() {
  }

}
