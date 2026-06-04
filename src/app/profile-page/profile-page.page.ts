import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.page.html',
  styleUrls: ['./profile-page.page.scss'],
  standalone: false
})
export class ProfilePagePage implements OnInit {

  isCurrentPage: boolean = true;
  // Hard-coded Simulated User Profile Mock Data Data Payload
  UserProfile = {
    name: 'Lim Zhi Xian',
    email: 'll@gmail.com',
    phone: '+60 12-345 6789',
    deliveryAddress: 'Lot 12, Jalan Jenai, Kuala Lumpur',
    avatar: 'https://st4.depositphotos.com/3864435/27060/i/600/depositphotos_270605520-stock-photo-default-avatar-profile-icon-grey.jpg'
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  /* Footer Navigation Router Helpers Context Rules Link Handlers */
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

}