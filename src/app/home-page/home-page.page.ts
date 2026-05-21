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
  
  ProductClick(id : number){
    this.router.navigate(['/product-page' , id]);
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

  ngOnInit() {
  }

}
