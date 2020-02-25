import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  path ='http://localhost:8080/api/';
  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get <Item[]>(this.path+'items');
  }
}
