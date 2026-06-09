import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; 
import { Product } from '../database/product';

declare var Swal: any;

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.page.html',
  styleUrls: ['./shop-page.page.scss'],
  standalone: false
})
export class ShopPagePage implements OnInit {

  currentTab: string = 'shop';
  masterProductList: any[] = [];
  filteredProductList: any[] = [];
  currentSort = ''; 
  lastSearchTerm = '';
  selectedCategory = 'All';

  categoriesList = [
    { name: 'All', icon: 'apps-outline' },
    { name: 'Noodles', icon: 'restaurant-outline' },
    { name: 'Western', icon: 'fast-food-outline' },
    { name: 'Vegetarian', icon: 'leaf-outline' },
    { name: 'Japanese', icon: 'fish-outline' },
    { name: 'Asian', icon: 'restaurant-outline' },
    { name: 'Local', icon: 'home-outline' },
    { name: 'Dessert', icon: 'ice-cream-outline' },
    { name: 'Mexican', icon: 'pizza-outline' },
    { name: 'Thai', icon: 'flame-outline' },
    { name: 'Chinese', icon: 'cafe-outline' }
  ];

  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private product: Product
  ) { }

  ngOnInit() {
    this.masterProductList = this.product.getProduct() || [];
    
    const passedCategory = this.route.snapshot.paramMap.get('category');
    
    if (passedCategory) {
      this.selectedCategory = passedCategory;
    } else {
      this.selectedCategory = 'All';
    }

    this.executeFilterAndSort();
  }

  selectCategory(category: any){
    this.selectedCategory = category.name;
    this.executeFilterAndSort();
  }

  onSearchChange(event: any) {
    this.lastSearchTerm = event.target.value ? event.target.value.toLowerCase().trim() : '';
    this.executeFilterAndSort();
  }

  applySort(sortType: string) {
    this.currentSort = sortType;
    this.executeFilterAndSort();
  }

  executeFilterAndSort() {
    let result = [...this.masterProductList];

    // Category Filter
    if(this.selectedCategory !== 'All'){
      result = result.filter(
        item => item.Category === this.selectedCategory
      );
    }

    // Search Filter
    if(this.lastSearchTerm){
      result = result.filter(item =>
        item.name &&
        item.name.toLowerCase().includes(this.lastSearchTerm)
      );
    }

    // Sorting
    if (this.currentSort === 'alpha') {
      result.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
    }
    else if (this.currentSort === 'priceLow') {
      result.sort((a, b) => (a.price || 0) - (b.price || 0));
    }
    else if (this.currentSort === 'priceHigh') {
      result.sort((a, b) => (b.price || 0) - (a.price || 0));
    }

    this.filteredProductList = result;
  }

  ProductClick(productid: number) {
    this.router.navigate(['/product-page', { productid: productid }]);
  }

  addtocart(id: number) {
    const foundProduct = this.product.findProduct(id);
    if (foundProduct) {
      const cartPayload = { MyProduct: foundProduct, Quantity: 1 };
      this.product.Addtocart(cartPayload);
      
      Swal.fire({
        title: 'Added to Cart!',
        text: `item add to cart successfully.`,
        icon: 'success',
        iconColor: '#4caf50', 
        confirmButtonText: 'Awesome',
        confirmButtonColor: 'rgb(236, 52, 20)', 
        heightAuto: false, 
        customClass: { popup: 'swal2-ionic-fix' }
      });
      console.log(`${foundProduct.name} updated in service cache storage.`);
    } else {
      console.error(`Product validation failed for ID: ${id}`);
    }
  }

  LinkToHome() { this.router.navigate(['/home-page']); }
  LinkToShop() { this.router.navigate(['/shop-page']); }
  LinkToCart() { this.router.navigate(['/cart-page']); }
  LinkToProfile() { this.router.navigate(['/profile-page']); }
  LinkToOrderHistory() { this.router.navigate(['/order-history-page']); }
}