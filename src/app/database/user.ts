import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class User {

  private activeUser = {
    name: 'Lim Zhi Xian',
    email: 'll@gmail.com',
    phone: '+60 12-345 6789',
    deliveryAddress: 'Lot 12, Jalan Jenai, Kuala Lumpur',
    avatar: '/assets/avatar.jpg'
  };

  constructor() {}

  getUserProfile() {
    return this.activeUser;
  }

  updateUserProfile(updatedData: any) {

    if (updatedData.avatar) {
      this.activeUser.avatar = updatedData.avatar;
    }
    if (updatedData.name) {
      this.activeUser.name = updatedData.name;
    }
  }
}