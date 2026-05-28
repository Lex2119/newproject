import { Component, OnInit } from '@angular/core';
import { Product } from '../database/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.page.html',
  styleUrls: ['./cart-page.page.scss'],
  standalone: false
})
export class CartPagePage implements OnInit {

  CartList : any[] = [];

  constructor(private product: Product,private router: Router) {
  }

ionViewWillEnter(){

  this.CartList = this.product.getCartList();

}

  increaseQty(item: any) {

    item.quantity++;

  }

  decreaseQty(item: any) {

    if(item.quantity > 1){

      item.quantity--;

    }
    else{

      this.CartList = this.CartList.filter(
        (x:any) => x.productName !== item.productName
      );

      this.product.cartlist = this.CartList;

    }

  }

  GetTotalPrice(){

    if(!this.CartList){
      return 0;
    }

    let total = 0;

    this.CartList.forEach((item:any) => {

      total += item.Price * item.quantity;

    });

    return total;

  }

  Checkout(){
    
    this.CartList = this.product.getCartList();
    
    if(this.CartList.length <= 0){
      return;

    }
    this.router.navigate(['/payment-page']);

  }

  CanCheckout(){

  return this.CartList.length > 0;

}

  ngOnInit() {
  }

}