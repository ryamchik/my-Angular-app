import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Item} from './item';

@Injectable()
export class HttpService{
    constructor(private http: HttpClient) {}

    getData(){
        return this.http.get('assets/items.json')
    }
}