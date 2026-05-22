import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Product {


  productlist = [
    {id : 1 , name : "Ramen" , price : 32 , image: "https://www.tastingtable.com/img/gallery/the-best-ramen-restaurants-in-nyc/l-intro-1668621852.jpg" , backgroundcolor : "#21fff7" , description : "" , ingredientlist : ""},
    {id : 2 , name : "Meggi" , price : 13 , image: "https://thfvnext.bing.com/th/id/OIP.lqXy9Y5Jjag7_Y-WV9W8LAHaEK?r=0&o=7&cb=thfvnextfalconrm=3&rs=1&pid=ImgDetMain&o=7&rm=3" , backgroundcolor : "#ffeb3b" , description : "" , ingredientlist : ""},
    {id : 3 , name : "Pancake" , price : 15 , image: "https://png.pngtree.com/background/20230522/original/pngtree-stack-of-pancakes-covered-in-berries-is-on-a-table-picture-image_2685073.jpg" , backgroundcolor : "#4caf50" , description : "" , ingredientlist : ""},
    {id : 4 , name : "Burger" , price : 21 , image: "https://www.eatthis.com/wp-content/uploads/sites/4/2023/06/burger-king-Texas-Double-Whopper.jpg?resize=343" , backgroundcolor : "#ff9800" , description : "" , ingredientlist : ""},
    {id : 5 , name : "Pizza" , price : 25 , image: "https://images3.alphacoders.com/104/thumb-1920-1041781.jpg" , backgroundcolor : "#f44336" , description : "" , ingredientlist : ""},
    {id : 6 , name : "Salad" , price : 14 , image: "https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?cs=srgb&dl=bread-food-salad-1213710.jpg&fm=jpg" , backgroundcolor : "#8bc34a" , description : "" , ingredientlist : ""},
    {id : 7 , name : "Pasta" , price : 18 , image: "https://tse3.mm.bing.net/th/id/OIP.6ycESfOKovw3OviJlMyCbAHaEK?r=0&cb=thfvnextfalcon&rs=1&pid=ImgDetMain&o=7&rm=3" , backgroundcolor : "#9c27b0" , description : "" , ingredientlist : ""}

  ]

  cartlist : {cartId: number, productName : string, Price : number, image: string, quantity:number, backgroundColor : string, description: string,ingredientlist: string}[]= []

  Addtocart(product: any){
    if(product == null){
      return;
    }
    var checkCart = this.cartlist.find(x=>x.productName == product.MyProduct.name);

    if(checkCart == null){
      this.cartlist.push({
        cartId : (this.cartlist.length)+1,
        productName : product.MyProduct.name,
        Price : product.MyProduct.price,
        image : product.MyProduct.image,
        quantity : product.Quantity,
        backgroundColor : product.MyProduct.backgroundcolor,
        description : product.MyProduct.description,
        ingredientlist : product.MyProduct.ingredientlist
      })
    }
    else{

      checkCart.quantity += product.Quantity;
    }

    console.log(this.cartlist);
  }

  getCartList(){
    return this.cartlist;
  }
  
  getProduct(){
    return this.productlist;
  }

  addProduct(product : any){
    this.productlist.push(product);
  }

  findProduct(id : number){
    var product = this.productlist.find(p=>p.id == id);
    return product;
  }
}
     