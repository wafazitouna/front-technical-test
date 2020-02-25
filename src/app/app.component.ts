import { Component, OnInit } from '@angular/core';
import { ItemService } from './services/item.service';
import { Item } from './models/item';

@Component({
	selector: 'oo-app',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

	items:Item[]=[];
	constructor(private itemService: ItemService){

	}
	ngOnInit(): void {
		//Called after the constructor, initializing input properties, and the first call to ngOnChanges.
		//Add 'implements OnInit' to the class.
		this.itemService.getAll().subscribe((res:any)=>{
			this.items = res.items;
			console.log(this.items);
			
		})
	}
}
