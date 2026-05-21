import { Component, OnInit } from '@angular/core';
import { Product } from '../database/product';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.page.html',
  styleUrls: ['./product-page.page.scss'],
  standalone: false
})
export class ProductPagePage implements OnInit {

  constructor( private product: Product) { }

  myproductlist = this.product.getProduct();

  ngOnInit() {
  }

}
