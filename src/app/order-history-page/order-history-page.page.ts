import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../database/product';

@Component({
  selector: 'app-order-history-page',
  templateUrl: './order-history-page.page.html',
  styleUrls: ['./order-history-page.page.scss'],
  standalone: false
})
export class OrderHistoryPagePage implements OnInit {

  OrderHistory : any;

  constructor(private router: Router, public product: Product) { 
     this.OrderHistory = this.product.getOrderHistory();
  }

  LinkToHome() {
    this.router.navigate(['/home-page']);
  }

  LinkToShop() {
    this.router.navigate(['/shop-page']);
  }

  LinkToOrderHistory() {
    this.router.navigate(['/order-history-page']);
  }

  LinkToCart() {
    this.router.navigate(['/cart-page']);
  }

  LinkToProfile() {
    this.router.navigate(['/profile-page']);
  }

  ngOnInit() {
  }

}