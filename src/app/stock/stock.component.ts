import {Component, OnInit} from '@angular/core';
import {Produit} from "./produit";

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {


  constructor() {
  }

  ngOnInit(): void {

  }

  stock: Produit[] = [
    {
      id: 1,
      name: "Samsung",
      price: 150,
      description: "great Samsung",
      imagePath: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a13-1.jpg",
      quantity: 5
    },
    {
      id: 2,
      name: "iPhone",
      price: 130,
      description: "great Apple",
      imagePath: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_HowToBuy_iPhone-13-Pro_09162021_carousel.jpg.large.jpg",
      quantity: 5
    },
    {
      id: 3,
      name: "Nokia",
      price: 600,
      description: "great Nokia",
      imagePath: "https://images.frandroid.com/wp-content/uploads/2020/09/nokia-2-4-frandroid-2020.png",
      quantity: 5
    }
  ];


  countdown(produit:Produit) : void {
    if (produit.quantity !== 0) {
      produit.quantity--;
    }
    console.table(this.stock);

  }
}
