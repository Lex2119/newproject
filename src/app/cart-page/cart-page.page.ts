import { Component, OnInit } from '@angular/core';
import { Product } from '../database/product';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.page.html',
  styleUrls: ['./cart-page.page.scss'],
  standalone: false
})
export class CartPagePage implements OnInit {

  CartList : any;

  constructor(private product: Product) {
    this.CartList = product.getCartList();
  }

  increaseQty(item: any) {
    item.quantity++;
  }

  decreaseQty(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
    } else {
      // Optional: Remove item from cart if it drops below 1
      this.CartList = this.CartList.filter((x: any) => x.cartId !== item.cartId);
      // Synchronize back directly to database array state
      this.product.cartlist = this.CartList;
    }
  }

  ngOnInit() {
  }
}