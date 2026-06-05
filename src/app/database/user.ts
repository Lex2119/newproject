import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class User {

  // Centralized, singular true source of user data
  private activeUser = {
    name: 'Lim Zhi Xian',
    email: 'll@gmail.com',
    phone: '+60 12-345 6789',
    deliveryAddress: 'Lot 12, Jalan Jenai, Kuala Lumpur',
    avatar: '/assets/avatar.jpg' // Or your cloud storage URL string pointer
  };

  constructor() {}

  // Method to fetch the active user context safely
  getUserProfile() {
    return this.activeUser;
  }

  // Optional: Add a mutation method if you want to allow profile edits later
  updateUserProfile(updatedData: any) {
    this.activeUser = { ...this.activeUser, ...updatedData };
  }
}