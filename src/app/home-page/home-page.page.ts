import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../database/product';
import { User } from '../database/user'; // Linked to your user database asset file

declare var Swal: any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
  standalone: false
})
export class HomePagePage implements OnInit, OnDestroy {

  ionViewWillEnter() {
  // This executes every single time the user navigates back to the Home tab!
  this.UserProfile = this.user.getUserProfile();
  
  // Optional debug to verify the data stream is working in your console
    console.log('Home Page refreshed active user data context:', this.UserProfile);
  }

  @ViewChild('bannerTrack', { static: false }) bannerTrack!: ElementRef;

  // Data Collections
  allProducts: any[] = [];
  myproductlist: any[] = [];
  bannerPromos: any[] = [];
  UserProfile: any = {}; // Holds real linked user data dynamically
  
  // FIX: Explicitly declare the greeting variable properties here
  greetingMessage: string = 'Welcome';

  // Slider State Trackers
  activeBannerIndex = 0;
  slideIntervalId: any;

  private funBadges = ['Hot Deal', 'Trending', 'Chef Choice', 'Must Try', 'Top Rated'];

  // Categories Setup Array List Mapping
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

  // Inject both Product and User systems together seamlessly
  constructor(
    private router: Router, 
    private product: Product, 
    private user: User
  ) { }

  ngOnInit() {
    // 1. Fetch products and clone default visible list array view maps
    this.allProducts = this.product.getProduct() || [];
    this.myproductlist = [...this.allProducts];
    this.selectedItem = this.categoriesList[0];
    
    // 2. Automatically link your active user identity data from the shared service
    this.UserProfile = this.user.getUserProfile();
    
    // 3. Set dynamic time greeting row calculation
    this.setDynamicGreeting();
    
    // 4. Assemble random banners with structural smart colors
    this.generateRandomBanners();

    // 5. Fire up the hardware slider system
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  // FIX: This method is now moved back inside the class boundaries where it belongs
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

      // Extract native dataset colors from database items seamlessly
      const baseColor = prod.backgroundcolor || '#ff4724';
      
      // Compute high-contrast readable dark alpha visual layers over backgrounds
      const dynamicGradient = `linear-gradient(135deg, ${baseColor} 0%, rgba(0, 0, 0, 0.35) 100%), ${baseColor}`;

      return {
        productId: prod.id,
        title: `TRY OUR ${prod.name.toUpperCase()}!`,
        subtitle: cleanSubtitle,
        productImage: prod.image || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
        bgGradient: dynamicGradient,
        badge: this.funBadges[Math.floor(Math.random() * this.funBadges.length)]
      };
    });
  }

  /* Slider Engine Control Framework Logic Blocks */
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

  /* Navigation Interaction Handlers */
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

  /* Footer Navigation Router Link Helpers */
  LinkToHome() { this.router.navigate(['/home-page']); }
  LinkToShop() { this.router.navigate(['/shop-page']); }
  LinkToOrderHistory() { this.router.navigate(['/order-history-page']); }
  LinkToCart() { this.router.navigate(['/cart-page']); }
  LinkToProfile() { this.router.navigate(['/profile-page']); }

  addtocart(id: number) {
      // 1. Locate the item from your service's mock database array
      const foundProduct = this.product.findProduct(id);
      
      if (foundProduct) {
        // 2. Wrap it inside the exact structural format your service expects
        const cartPayload = {
          MyProduct: foundProduct,
          Quantity: 1
        };
        
        // 3. Send it off to your service
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
} // Absolute ending boundary bracket for the component class layout