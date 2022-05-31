import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child.component';
import { HttpClientModule } from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';
import { ShoppingListComponent } from './shoppingList.component';
import { CalcComponent } from './calc.component';

const appRoutes: Routes =[
  { path: '', component: ShoppingListComponent},
  { path: 'calc', component: CalcComponent}
];

@NgModule({
  declarations: [AppComponent, ChildComponent, ShoppingListComponent, CalcComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
  bootstrap: [AppComponent]
})
export class AppModule { }
