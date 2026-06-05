import { Component, OnInit } from '@angular/core';
import { Product } from '../database/product';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.page.html',
  styleUrls: ['./payment-page.page.scss'],
  standalone: false
})
export class PaymentPagePage implements OnInit {

  CartList: any[] = [];
  cardNumber = '';
  cardName = '';
  expiry = '';
  cvv = '';
  isLoading = false;

  constructor(
    private product: Product,
    private router: Router
  ) {
    this.CartList = this.product.getCartList() || [];
  }

  GetTotalPrice(): number {
    if (!this.CartList || this.CartList.length === 0) return 0;
    let total = 0;
    this.CartList.forEach((item: any) => {
      total += (item.Price || 0) * (item.quantity || 0);
    });
    return total;
  }

  // Handle Cancel Action safely with SweetAlert warning
  CancelPayment() {
    Swal.fire({
      title: 'Abandon Checkout?',
      text: 'Your current payment credentials will not be saved.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#cd3d64', // Crimson Confirmation
      cancelButtonColor: '#635bff',
      confirmButtonText: 'Yes, cancel it',
      cancelButtonText: 'Stay here',
      heightAuto: false
    }).then((result) => {
      if (result.isConfirmed) {
        // Redirect user back to shopping cart or shop catalog page
        this.router.navigate(['/cart-page']); 
      }
    });
  }

  async PayNow() {
    const num = (this.cardNumber || '').trim();
    const name = (this.cardName || '').trim();
    const exp = (this.expiry || '').trim();
    const cv = (this.cvv || '').trim();

    if (!num || !name || !exp || !cv) {
      Swal.fire({
        icon: 'error',
        title: 'Incomplete Details',
        text: 'All card fields must be filled before processing transaction.',
        confirmButtonColor: '#635bff'
      });
      return; 
    }

    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
      const transactionId = "STRIPE-" + Math.floor(Math.random() * 1000000);

      Swal.fire({
        icon: 'success',
        title: 'Payment Successful',
        html: `Thank you for your purchase!<br><br><b>Transaction ID:</b> ${transactionId}`,
        confirmButtonColor: '#635bff',
        heightAuto: false
      }).then(() => {
        this.product.checkoutCart();
        this.router.navigate(['/order-history-page']);
      });

    }, 2500);
  }

  ngOnInit() {}
}