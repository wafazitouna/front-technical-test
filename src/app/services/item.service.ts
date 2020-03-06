import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { ResponseContentType, RequestOptions } from '@angular/http';

import { Item } from '../models/item';

@Injectable({
	providedIn: 'root',
})
export class ItemService {
	path = 'http://localhost:8080/api/';
	currentFolder: Item;

	constructor(private http: HttpClient) { }

	getAll() {
		return this.http.get<Item[]>(this.path + 'items');
	}

	create(data: any,parentId:string) {
		console.log(parentId,'++++');
		if(parentId){
			console.log(parentId);
			
			return this.http.post<any>(this.path + 'items?parentId=' + parentId, data);
		}
		console.log('**************');
		
		return this.http.post<any>(this.path + 'items', data);
	}

	download(itemID: string) {

		return this.http.get(this.path + 'items/' + itemID, { responseType: 'blob' });
	}
	getChildren(parentId: string) {

		return this.http.get(this.path + 'items/?parentId=' + parentId);
	}
	getCurrentFolder() {
		return this.currentFolder;
	}
	setCurrentFolder(folder: Item) {
		this.currentFolder = folder;
	}


}
