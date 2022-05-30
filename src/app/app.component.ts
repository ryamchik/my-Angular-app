import { Component } from '@angular/core';
import { DataService } from './data.service';
import { NgModel} from '@angular/forms';
import { HttpService } from './http.service';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService, HttpService]
})
export class AppComponent {
  text: string = "";
  price: number = 0;

  constructor(private dataService: DataService){}

  items = this.dataService.getItems();

  addItem(text: string, price: number): void {
    this.dataService.addItem(text, price);
  }
  getTotalSum(): number{
    return this.dataService.getTotalSum(); 
  }
  addJSONItem(shoppingList: Item[]){
    shoppingList.forEach(element => {
      this.items.push(element);
    });
  }
}
