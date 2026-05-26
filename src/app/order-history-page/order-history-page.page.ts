import { Component, OnInit } from '@angular/core';
import { Product } from '../database/product';

@Component({
  selector: 'app-order-history-page',
  templateUrl: './order-history-page.page.html',
  styleUrls: ['./order-history-page.page.scss'],
  standalone: false
})
export class OrderHistoryPagePage implements OnInit {

  OrderHistory : any;

  constructor(public product: Product) { 
     this.OrderHistory = this.product.getOrderHistory();
  }

  ngOnInit() {
  }

}
