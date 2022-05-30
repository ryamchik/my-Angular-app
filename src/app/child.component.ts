import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { HttpService } from './http.service';
import { Item } from './item';

@Component({
  selector: 'child-comp',
  templateUrl: 'child.component.html'
})
export class ChildComponent implements OnInit
{
    @Input() totalPrice: number = 0;
    @Output() emitter = new EventEmitter<Item[]>();
    items: Item[] = [];

    constructor(private httpService: HttpService){ }

    ngOnInit(): void {
      this.httpService.getData().subscribe((data: any) => this.items=data["itemList"]);
      this.emitter.emit(this.items);
    }
}