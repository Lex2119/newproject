import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../database/user'; 

import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.page.html',
  styleUrls: ['./profile-page.page.scss'],
  standalone: false
})
export class ProfilePagePage implements OnInit {

  currentTab: string = 'profile';  

  isCurrentPage: boolean = true;
  UserProfile: any = {};

  constructor(private router: Router, private user: User) { }

  ngOnInit() {
    this.UserProfile = this.user.getUserProfile();
  }

  async changeProfilePhoto() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false, // Set to true if you want to allow cropping
        resultType: CameraResultType.Uri, 
        source: CameraSource.Prompt 
      });

      if (image && image.webPath) {
        this.user.updateUserProfile({ avatar: image.webPath });
        
        this.UserProfile = this.user.getUserProfile();
      }
    } catch (error) {
      console.log('User cancelled camera actions or permissions were denied.', error);
    }
  }

  LinkToHome() { this.router.navigate(['/home-page']); }
  LinkToShop() { this.router.navigate(['/shop-page']); }
  LinkToOrderHistory() { this.router.navigate(['/order-history-page']); }
  LinkToCart() { this.router.navigate(['/cart-page']); }
  LinkToProfile() { this.router.navigate(['/profile-page']); }
  Logout() { this.router.navigate(['/login-page']); }
}