import { Component, OnInit } from '@angular/core';
import { Product } from '../database/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.page.html',
  styleUrls: ['./payment-page.page.scss'],
  standalone: false
})
export class PaymentPagePage implements OnInit {

 CartList : any;

  constructor(
    private product: Product,
    private router: Router
  ) {

    this.CartList = this.product.getCartList();

  }

  GetTotalPrice(){

    let total = 0;

    this.CartList.forEach((item:any) => {

      total += item.Price * item.quantity;

    });

    return total;

  }

  PayNow(){

    this.product.checkoutCart();

    this.router.navigate(['/order-history-page']);

  }

  ngOnInit() {
  }

}