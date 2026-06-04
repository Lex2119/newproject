import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../database/product';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.page.html',
  styleUrls: ['./shop-page.page.scss'],
  standalone: false
})
export class ShopPagePage implements OnInit {

  masterProductList: any[] = [];
  filteredProductList: any[] = [];

  constructor(private router: Router, private product: Product) { }

  ngOnInit() {
    // Populate raw layout context array matrix directly from database service
    this.masterProductList = this.product.getProduct() || [];
    this.filteredProductList = [...this.masterProductList];
  }

  // Live query evaluation matching array criteria pipeline loop
  onSearchChange(event: any) {
    const searchTerm = event.target.value ? event.target.value.toLowerCase().trim() : '';

    if (!searchTerm) {
      this.filteredProductList = [...this.masterProductList];
      return;
    }

    this.filteredProductList = this.masterProductList.filter(item => {
      return item.name && item.name.toLowerCase().includes(searchTerm);
    });
  }

  ProductClick(productid: number) {
    this.router.navigate(['/product-page', { productid: productid }]);
  }

  addtocart(id: number) {
    alert("ID= " + id);
  }

  /* Navigation Routing Engine Context Hooks */
  LinkToHome() {
    this.router.navigate(['/home-page']);
  }

  LinkToShop() {
    this.router.navigate(['/shop-page']);
  }

  LinkToCart() {
    this.router.navigate(['/cart-page']);
  }

  LinkToProfile() {
    this.router.navigate(['/profile-page']);
  }

  LinkToOrderHistory() {
    this.router.navigate(['/order-history-page']); // Brand new method mapping to order history layout
  }
}