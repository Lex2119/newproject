import { Component, OnInit } from '@angular/core';
import {Product} from '../database/product';

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

  ngOnInit() {
  }

}
