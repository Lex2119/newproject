import { Component, OnInit } from '@angular/core';
import { Product } from '../database/product';
import { ActivatedRoute } from '@angular/router';

declare var Swal: any;

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.page.html',
  styleUrls: ['./product-page.page.scss'],
  standalone: false
})
export class ProductPagePage implements OnInit {

  isModelOpen: boolean = false;
  MyProduct: any;
  Quantity: number = 1;

  constructor(private product: Product, private GetRoute: ActivatedRoute) { 
    const id = this.GetRoute.snapshot.paramMap.get("productid");
    
    if (id == null) {
      return;
    }
    this.MyProduct = product.findProduct(Number(id));
  }

  AddQuantity() {
    this.Quantity++;
  }

  MinusQuantity() {
    this.Quantity--;
    if (this.Quantity < 1) {
      this.Quantity = 1;
    }
  }

  NoticeAddtocart() {

    this.isModelOpen = true;
    
  }
  
  onModelDismiss(){
    this.isModelOpen = false;
  }

  SetOpen(modelstatus: boolean){
    this.isModelOpen = false;
  }

  AddProductToCart(product: boolean){
    if(product == false){
      alert("Product not added to cart.");
    }
    else{
      this.product.Addtocart({
      MyProduct: this.MyProduct,
      Quantity: this.Quantity,
    });

    Swal.fire({
      title: 'Added to Cart!',
      text: `${this.Quantity}x ${this.MyProduct.name} successfully added.`,
      icon: 'success',
      iconColor: '#4caf50', 
      confirmButtonText: 'Awesome',
      confirmButtonColor: 'rgb(236, 52, 20)', 
      heightAuto: false, 
      customClass: {
        popup: 'swal2-ionic-fix'
      }
    });
    }
    this.isModelOpen = false;
  }
  ngOnInit() {
  }

}