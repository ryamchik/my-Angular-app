import { Component, IterableDiffers } from '@angular/core';

class Item{
  purchase: string;
  done: boolean;
  price: number;
  
  constructor(purchase: string, price: number) {
    this.purchase = purchase;
    this.price = price;
    this.done = false;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  text: string = "";
  price: number = 0;
  totalSum: number = 0;

  items: Item[] = 
  [
    { purchase: "Хлеб", done: false, price: 15.9},
    { purchase: "Масло", done: false, price: 15.9},
    { purchase: "Картофель", done: false, price: 15.9},
    { purchase: "Сыр", done: false, price: 15.9},
  ];
  addItem(text: string, price: number): void {
    if(text==null || text.trim()=="" || price==null)
      return;
    this.items.push(new Item(text, price));
    this.totalSum = this.sumPrice();
  }
  sumPrice():number {
    return this.items.reduce((accumulator, item) => {
      return accumulator + item.price;
    }, 0);
}
}
