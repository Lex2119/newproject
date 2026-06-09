import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../database/product';
import { User } from '../database/user'; 

declare var Swal: any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
  standalone: false
})
export class HomePagePage implements OnInit, OnDestroy {
  
  currentTab: string = 'home'; 

  ionViewWillEnter() {
    // 1. Refresh active user data profile context
    this.UserProfile = this.user.getUserProfile();
    
    // 2. FORCE the category selector to return back to 'All'
    this.selectedItem = this.categoriesList[0]; 
    
    // 3. WIPE any active category filters and display all products again
    this.myproductlist = [...this.allProducts];

  }

  

  @ViewChild('bannerTrack', { static: false }) bannerTrack!: ElementRef;

  allProducts: any[] = [];
  myproductlist: any[] = [];
  bannerPromos: any[] = [];
  UserProfile: any = {}; 
  
  greetingMessage: string = 'Welcome';

  activeBannerIndex = 0;
  slideIntervalId: any;

  private funBadges = ['Hot Deal', 'Trending', 'Chef Choice', 'Must Try', 'Top Rated'];

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
  selectedItem = this.categoriesList[0];

  constructor(
    private router: Router, 
    private product: Product, 
    private user: User
  ) { }

  ngOnInit() {
    this.allProducts = this.product.getProduct() || [];
    this.myproductlist = [...this.allProducts];
    this.selectedItem = this.categoriesList[0];
    
    this.UserProfile = this.user.getUserProfile();
    
    this.setDynamicGreeting();
    
    this.generateRandomBanners();

    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  setDynamicGreeting() {
    const hour = new Date().getHours(); // Gets local hour (0 - 23)
    
    if (hour < 12) {
      this.greetingMessage = 'Good Morning 🍳';            // 12:00 AM - 11:59 AM
    } else if (hour < 17) {
      this.greetingMessage = 'Good Afternoon ☀️';          // 12:00 PM - 4:59 PM
    } else if (hour < 22) {
      this.greetingMessage = 'Good Evening 🍔';            // 5:00 PM - 9:59 PM
    } else {
      this.greetingMessage = 'Late Night Cravings? 🍕';    // 10:00 PM - 11:59 PM
    }
  }

  generateRandomBanners() {
    if (!this.allProducts || this.allProducts.length === 0) return;

    // Shuffle current active inventory and pick 5 random dishes
    const shuffled = [...this.allProducts].sort(() => 0.5 - Math.random());
    const selectedProducts = shuffled.slice(0, 5);

    this.bannerPromos = selectedProducts.map((prod, index) => {
      const cleanSubtitle = prod.description && prod.description.length > 40 
        ? prod.description.substring(0, 38) + '...' 
        : prod.description || 'Delectable dishes cooked fresh!';

      const baseColor = prod.backgroundcolor || '#ff4724';
      
      const dynamicGradient = `linear-gradient(135deg, ${baseColor} 0%, rgba(0, 0, 0, 0.35) 100%), ${baseColor}`;

      return {
        productId: prod.id,
        title: `TRY OUR ${prod.name.toUpperCase()}!`,
        subtitle: cleanSubtitle,
        productImage: prod.image,
        bgGradient: dynamicGradient,
        badge: this.funBadges[Math.floor(Math.random() * this.funBadges.length)]
      };
    });
  }

  startAutoSlide() {
    this.slideIntervalId = setInterval(() => {
      if (this.bannerPromos.length > 0) {
        this.activeBannerIndex = (this.activeBannerIndex + 1) % this.bannerPromos.length;
        this.scrollToActiveBanner();
      }
    }, 4000);
  }

  stopAutoSlide() {
    if (this.slideIntervalId) clearInterval(this.slideIntervalId);
  }

  scrollToActiveBanner() {
    if (!this.bannerTrack) return;
    const container = this.bannerTrack.nativeElement;
    const slideWidth = container.clientWidth;
    container.scrollTo({
      left: this.activeBannerIndex * slideWidth,
      behavior: 'smooth'
    });
  }

  OnBannerClick(productId: number) {
    this.router.navigate(['/product-page', { productid: productId }]);
  }

  ProductClick(productid: number) { 
    this.router.navigate(['/product-page', { productid: productid }]); 
  }

  selecteditem(item: any) { 
    this.selectedItem = item; 
    if (item.name === 'All') { 
      this.myproductlist = [...this.allProducts]; 
    } else { 
      this.myproductlist = this.allProducts.filter(p => p.Category === item.name); 
    } 
  }

  LinkToHome() { this.router.navigate(['/home-page']); }

  LinkToShop() { 
    this.router.navigate(['/shop-page', { category: this.selectedItem?.name || 'All' }]); 
  }

  LinkToOrderHistory() { this.router.navigate(['/order-history-page']); }

  LinkToCart() { this.router.navigate(['/cart-page']); }

  LinkToProfile() { this.router.navigate(['/profile-page']); }

  addtocart(id: number) {
      const foundProduct = this.product.findProduct(id);
      
      if (foundProduct) {
        const cartPayload = {
          MyProduct: foundProduct,
          Quantity: 1
        };
        
        this.product.Addtocart(cartPayload);
        Swal.fire({
        title: 'Added to Cart!',
        text: `item add to cart successfully.`,
        icon: 'success',
        iconColor: '#4caf50', 
        confirmButtonText: 'Awesome',
        confirmButtonColor: 'rgb(236, 52, 20)', 
        heightAuto: false, 
        customClass: {
          popup: 'swal2-ionic-fix'
        }
      });
        console.log('Successfully pushed item to shared service cart array:', foundProduct.name);
      } else {
        console.error(`Product with ID ${id} was not found in the catalog.`);
      }
    }
  }