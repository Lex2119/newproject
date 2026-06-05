import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Product {

  productlist = [
    {
      id : 1 ,
      name : "Ramen" ,
      price : 32 ,
      image: "/assets/ramen.jpg",
      backgroundcolor : "#21fff7" ,
      description : "Authentic Japanese wheat noodles served in a rich, savory umami broth. Topped with green onions, seaweed, and a soft-boiled egg.",
      ingredientlist : "Noodles, Soy Broth, Soft Egg, Scallions, Nori Seaweed",
      Category : "Noodles"
    },
    {
      id : 2 ,
      name : "Meggi" ,
      price : 13 ,
      image: "/assets/maggi.webp",
      backgroundcolor : "#ffeb3b" ,
      description : "The classic, ultimate campus comfort food. Quick instant noodles cooked in a spicy, aromatic curry seasoning blend.",
      ingredientlist : "Instant Noodles, Secret Curry Spice Mix, Chili, Egg",
      Category : "Noodles"
    },
    {
      id : 3 ,
      name : "Pancake" ,
      price : 15 ,
      image: "/assets/pancake.jpg",
      backgroundcolor : "#4caf50" ,
      description : "Fluffy, golden-brown pancake stacks served hot. Layered with fresh forest berries and drizzled heavily with sweet organic maple syrup.",
      ingredientlist : "Flour, Milk, Sweet Berries, Pure Maple Syrup, Butter",
      Category : "Western"
    },
    {
      id : 4 ,
      name : "Burger" ,
      price : 21 ,
      image: "/assets/burger.webp",
      backgroundcolor : "#ff9800" ,
      description : "A thick, flame-grilled beef patty nestled inside a soft toasted sesame bun. Layered with melted cheddar cheese, fresh lettuce, tomatoes, and house sauce.",
      ingredientlist : "Grilled Beef, Sesame Bun, Cheddar Cheese, Lettuce, Tomato",
      Category : "Western"
    },
    {
      id : 5 ,
      name : "Pizza" ,
      price : 25 ,
      image: "/assets/pizza.jpg",
      backgroundcolor : "#f44336" ,
      description : "Hand-tossed crust baked to perfection. Loaded with aromatic marinara sauce, premium pepperoni slices, and stringy mozzarella cheese.",
      ingredientlist : "Pizza Dough, Tomato Sauce, Mozzarella, Smoked Pepperoni",
      Category : "Western"
    },
    {
      id : 6 ,
      name : "Salad" ,
      price : 14 ,
      image: "/assets/salad.jpg",
      backgroundcolor : "#8bc34a" ,
      description : "Crisp, refreshing field greens mixed with heirloom tomatoes, cucumbers, and feta cheese crumbs. Drizzled with a zesty vinaigrette.",
      ingredientlist : "Mixed Greens, Heirloom Tomatoes, Feta Cheese, Balsamic Dressing",
      Category : "Vegetarian"
    },
    {
      id : 7 ,
      name : "Pasta" ,
      price : 18 ,
      image: "/assets/pasta.webp",
      backgroundcolor : "#9c27b0" ,
      description : "Al dente spaghetti tossed in a rich, velvety creamy Alfredo sauce, garnished with premium parmesan shavings and fresh parsley leaves.",
      ingredientlist : "Spaghetti, Heavy Cream, Parmesan Cheese, Garlic, Parsley",
      Category : "Noodles"
    },
    {
      id : 8 ,
      name : "Sushi" ,
      price : 28 ,
      image: "/assets/sushi.jpg",
      backgroundcolor : "#03a9f4" ,
      description : "Fresh salmon and tuna slices wrapped with seasoned sushi rice and seaweed. Served with soy sauce, pickled ginger, and wasabi.",
      ingredientlist : "Sushi Rice, Salmon, Tuna, Nori Seaweed, Wasabi",
      Category : "Japanese"
    },
    {
      id : 9 ,
      name : "Fried Rice" ,
      price : 16 ,
      image: "/assets/fried rice.jpg",
      backgroundcolor : "#ffc107" ,
      description : "Fragrant wok-fried rice mixed with eggs, vegetables, and savory seasonings. A classic Asian favorite.",
      ingredientlist : "Rice, Egg, Carrot, Peas, Soy Sauce",
      Category : "Asian"
    },
    {
      id : 10 ,
      name : "Chicken Chop" ,
      price : 24 ,
      image: "/assets/chicken chop.jpg",
      backgroundcolor : "#795548" ,
      description : "Juicy grilled chicken breast served with fries, fresh vegetables, and a rich black pepper sauce.",
      ingredientlist : "Chicken Breast, Fries, Black Pepper Sauce, Vegetables",
      Category : "Western"
    },
    {
      id : 11 ,
      name : "Fish & Chips" ,
      price : 23 ,
      image: "/assets/fish&chip.jpg",
      backgroundcolor : "#607d8b" ,
      description : "Golden battered fish fillet paired with crispy fries and tartar sauce.",
      ingredientlist : "Fish Fillet, Fries, Tartar Sauce, Lemon",
      Category : "Western"
    },
    {
      id : 12 ,
      name : "Nasi Lemak" ,
      price : 12 ,
      image: "/assets/nasi lemak.jpg",
      backgroundcolor : "#e91e63" ,
      description : "Malaysia's iconic coconut rice dish served with sambal, anchovies, peanuts, egg, and cucumber.",
      ingredientlist : "Coconut Rice, Sambal, Anchovies, Egg, Peanuts",
      Category : "Local"
    },
    {
      id : 13 ,
      name : "Satay" ,
      price : 18 ,
      image: "/assets/satay.jpg" ,
      backgroundcolor : "#ff5722" ,
      description : "Skewered grilled chicken marinated in spices and served with rich peanut sauce.",
      ingredientlist : "Chicken, Peanut Sauce, Cucumber, Onion",
      Category : "Local"
    },
    {
      id : 14 ,
      name : "Ice Cream" ,
      price : 9 ,
      image: "/assets/ice cream.jpg" ,
      backgroundcolor : "#ff80ab" ,
      description : "Creamy vanilla ice cream topped with colorful sprinkles and chocolate syrup.",
      ingredientlist : "Milk, Cream, Sugar, Vanilla, Chocolate Syrup",
      Category : "Dessert"
    },
    {
      id : 15 ,
      name : "Chocolate Cake" ,
      price : 11 ,
      image: "/assets/chocalate cake.jpg" ,
      backgroundcolor : "#5d4037" ,
      description : "Rich and moist chocolate sponge cake layered with silky chocolate ganache.",
      ingredientlist : "Flour, Cocoa Powder, Chocolate, Butter, Sugar",
      Category : "Dessert"
    },
    {
      id : 16 ,
      name : "Tacos" ,
      price : 19 ,
      image: "/assets/taco.jpg" ,
      backgroundcolor : "#8bc34a" ,
      description : "Soft tortillas filled with seasoned beef, lettuce, cheese, and salsa.",
      ingredientlist : "Tortilla, Beef, Lettuce, Cheese, Salsa",
      Category : "Mexican"
    },
    {
      id : 17 ,
      name : "Burrito" ,
      price : 22 ,
      image: "/assets/burrito.jpg" ,
      backgroundcolor : "#4caf50" ,
      description : "A large flour tortilla wrapped around rice, beans, meat, and fresh vegetables.",
      ingredientlist : "Tortilla, Rice, Beans, Chicken, Vegetables",
      Category : "Mexican"
    },
    {
      id : 18 ,
      name : "Tom Yum Soup" ,
      price : 17 ,
      image: "/assets/Tom-Yum-Soup.jpeg" ,
      backgroundcolor : "#f44336" ,
      description : "A spicy and sour Thai soup packed with shrimp, mushrooms, and aromatic herbs.",
      ingredientlist : "Shrimp, Mushroom, Lemongrass, Lime, Chili",
      Category : "Thai"
    },
    {
      id : 19 ,
      name : "Dim Sum" ,
      price : 20 ,
      image: "/assets/dim sum.jpg" ,
      backgroundcolor : "#9e9e9e" ,
      description : "A selection of steamed dumplings and bite-sized Cantonese delicacies.",
      ingredientlist : "Dumpling Wrappers, Shrimp, Chicken, Vegetables",
      Category : "Chinese"
    },
    {
      id : 20 ,
      name : "Steak" ,
      price : 38 ,
      image: "/assets/steak.jpg" ,
      backgroundcolor : "#3f51b5" ,
      description : "Premium grilled beef steak cooked to perfection and served with mashed potatoes and vegetables.",
      ingredientlist : "Beef Steak, Mashed Potatoes, Vegetables, Gravy",
      Category : "Western"
    }
  ];

  cartlist : {
    productName : string,
    Price : number,
    image: string,
    quantity:number,
    backgroundColor : string,
    description: string,
    ingredientlist: string
  }[]= [];

  orderhistory : {
    productName : string,
    Price : number,
    image: string,
    quantity:number,
    backgroundColor : string,
    description: string,
    ingredientlist: string,
    paymentTime:string
  }[]= [];

  Addtocart(product: any){

    if(product == null){
      return;
    }

    var checkCart = this.cartlist.find(
      x => x.productName == product.MyProduct.name
    );

    if(checkCart == null){

      this.cartlist.push({

        productName : product.MyProduct.name,
        Price : product.MyProduct.price,
        image : product.MyProduct.image,
        quantity : product.Quantity,
        backgroundColor : product.MyProduct.backgroundcolor,
        description : product.MyProduct.description,
        ingredientlist : product.MyProduct.ingredientlist

      });

    }
    else{

      checkCart.quantity += product.Quantity;

    }

    console.log(this.cartlist);
  }

  checkoutCart(){

    var currentTime = new Date().toLocaleString();

    this.cartlist.forEach(item => {

      this.orderhistory.push({

        productName : item.productName,
        Price : item.Price,
        image : item.image,
        quantity : item.quantity,
        backgroundColor : item.backgroundColor,
        description : item.description,
        ingredientlist : item.ingredientlist,
        paymentTime : currentTime

      });

    });

    this.cartlist.length = 0;

  }

  getCartList(){
    return this.cartlist;
  }

  getOrderHistory(){
    return this.orderhistory;
  }

  getProduct(){
    return this.productlist;
  }

  addProduct(product : any){
    this.productlist.push(product);
  }

  findProduct(id : number){
    var product = this.productlist.find(p => p.id == id);
    return product;
  }
}