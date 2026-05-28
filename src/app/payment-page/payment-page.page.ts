// payment-page.page.ts

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

  cardNumber = '';
  cardName = '';
  expiry = '';
  cvv = '';

  isLoading = false;

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

    if(
      this.cardNumber == '' ||
      this.cardName == '' ||
      this.expiry == '' ||
      this.cvv == ''
    ){
      alert("Please fill all payment details");
      return;
    }

    this.isLoading = true;

    setTimeout(() => {

      this.isLoading = false;

      let transactionId =
      "STRIPE-" +
      Math.floor(Math.random() * 1000000);

      alert(
        "Payment Successful!\n\n" +
        "Transaction ID: " +
        transactionId
      );

      this.product.checkoutCart();

      this.router.navigate(['/order-history-page']);

    }, 2500);

  }

  ngOnInit() {
  }

}