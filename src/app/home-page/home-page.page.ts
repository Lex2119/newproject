import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Product } from '../database/product';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
  standalone: false
})
export class HomePagePage implements OnInit {


 
  constructor(private router: Router , private product: Product) { }

  myproductlist = this.product.getProduct();
  
  ProductClick(productid : number){
    this.router.navigate(['/product-page', {productid : productid}]);
  }

  addtocart(id : number){
    alert("ID= " + id )
  }
categoriesList = [
  {
    name : "food",
    image : "/asset/",
  },
  {
    name : "BreakFast",
    image : "/asset/",
  },
  {
    name : "Lunch",
    image : "/asset/",
  },
  {
    name : "Dinner",
    image : "/asset/",
  }
]
  selectedItem : any;
  selecteditem(item : any){
    this.selectedItem = item;
  }

  LinkToCart(){
    this.router.navigate(['/cart-page']);
  }

  LinkToHome() {
    this.router.navigate(['/home-page']); // adjust your home route dynamically here if named differently
  }

  LinkToShop() {
    this.router.navigate(['/shop-page']); // placeholder click method logic 
  }

  LinkToOrderHistory() {
    this.router.navigate(['/order-history-page']); // Brand new method mapping to order history layout
  }

  LinkToProfile() {
    this.router.navigate(['/profile-page']); // placeholder click method logic
  }

  ngOnInit() {
  }

}