import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../database/user'; 

// Import Capacitor Camera dependencies
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.page.html',
  styleUrls: ['./profile-page.page.scss'],
  standalone: false
})
export class ProfilePagePage implements OnInit {

  isCurrentPage: boolean = true;
  UserProfile: any = {};

  constructor(private router: Router, private user: User) { }

  ngOnInit() {
    this.UserProfile = this.user.getUserProfile();
  }

  // Unified async method to take or upload a photo
  async changeProfilePhoto() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false, // Set to true if you want to allow cropping
        resultType: CameraResultType.Uri, // Safest performance type for mobile rendering
        source: CameraSource.Prompt // Automatically creates a native Take Photo / Upload popup sheet
      });

      if (image && image.webPath) {
        // Update the centralized service cache with the local temporary mobile path
        this.user.updateUserProfile({ avatar: image.webPath });
        
        // Instantly refresh the local UI view structure bound to the template
        this.UserProfile = this.user.getUserProfile();
      }
    } catch (error) {
      console.log('User cancelled camera actions or permissions were denied.', error);
    }
  }

  /* Footer Navigation Router Helpers */
  LinkToHome() { this.router.navigate(['/home-page']); }
  LinkToShop() { this.router.navigate(['/shop-page']); }
  LinkToOrderHistory() { this.router.navigate(['/order-history-page']); }
  LinkToCart() { this.router.navigate(['/cart-page']); }
  LinkToProfile() { this.router.navigate(['/profile-page']); }
  Logout() { this.router.navigate(['/login-page']); }
}