import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../database/user'; // Import your UserService to access user data

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.page.html',
  styleUrls: ['./profile-page.page.scss'],
  standalone: false
})
export class ProfilePagePage implements OnInit {

  isCurrentPage: boolean = true;
  
  // Declared empty; will be safely populated dynamically from your central database file
  UserProfile: any = {};

  // Inject your User shared service dependency via the constructor signature
  constructor(private router: Router, private user: User) { }

  ngOnInit() {
    // Read data from the other file automatically when page initializes
    this.UserProfile = this.user.getUserProfile();
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

  Logout() {
    this.router.navigate(['/login-page']);
  }
}