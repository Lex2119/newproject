import { Component, OnInit } from '@angular/core';
import { Food } from '../model/food';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
  standalone: false
})
export class HomePagePage implements OnInit {

  // foodlist : Food[] = [

  //   {id: 1,
  //   foodName: "Pancake",
  //   foodImage : "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-craig-122861-376464.jpg&fm=jpg", 
  //   foodPrice : 10.99,
  //   foodDescription : "Delicious pancake",
  //   isCarted : false,
  //   isFavourite : true},

  //   {id: 2,
  //   foodName: "Salmon",
  //   foodImage : "https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?cs=srgb&dl=close-up-cooking-dinner-46239.jpg&fm=jpg", 
  //   foodPrice : 31.00,
  //   foodDescription : "Fresh and Delisious",
  //   isCarted : false,
  //   isFavourite : true},

  //   {id: 3,
  //   foodName: "Home Chef Fried Rice",
  //   foodImage : "https://tse1.mm.bing.net/th/id/OIP.UddCxI3o7i2sEnP_-0oUHgHaEJ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", 
  //   foodPrice : 14.50,
  //   foodDescription : "Fried Rice with chicken,egg and vegetables",
  //   isCarted : false,
  //   isFavourite : true},

  //   {id: 4,
  //   foodName: "Burger Set",
  //   foodImage : "https://th.bing.com/th/id/OIP.bso0W6RUjvIhDlp5Y4TkxAHaE8?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3", 
  //   foodPrice : 24.90,
  //   foodDescription : "Beef burger with fries and salad",
  //   isCarted : false,
  //   isFavourite : true},
  // ]
  constructor() { }

  ngOnInit() {
  }

}
