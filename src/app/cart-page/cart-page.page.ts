import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.page.html',
  styleUrls: ['./cart-page.page.scss'],
  standalone: false
})
export class CartPagePage implements OnInit {

  testlist=["","","","",""]
  constructor() { }

  ngOnInit() {
  }

}
