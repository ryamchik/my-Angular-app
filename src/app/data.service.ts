import { Item } from "./item";

export class DataService{
    totalSum: number = 0;
    items: Item[] = [];
        
    addItem(text: string, price: number): void {
        if(text==null || text.trim()=="" || price==null)
          return;
        this.items.push(new Item(text, price));
        this.totalSum = this.sumPrice();
    }
    getItems(): Item[] {
          
        return this.items;
    }
    sumPrice():number {
        return this.items.reduce((accumulator, item) => {
          return accumulator + item.price;
        }, 0);
    }
    getTotalSum(): number {
        return this.totalSum;
    }
}