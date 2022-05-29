import { Component, IterableDiffers } from '@angular/core';
import { DataService } from './data.service';
import { NgModel} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
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
}
