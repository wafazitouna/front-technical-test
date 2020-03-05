import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/item';

@Component({
	selector: 'fl-folder-details',
	templateUrl: './folder-details.component.html',
	styleUrls: ['./folder-details.component.css'],
})
export class FolderDetailsComponent implements OnInit {

	currentFolder: Item;
	listItems: Item[] = [];

	constructor(private itemService: ItemService) { }

	ngOnInit() {
		this.currentFolder = this.itemService.getCurrentFolder();
		this.getItems();
	}

	/**
	 * get items for current folder
	 */

	getItems() {

		this.itemService.getChildren(this.currentFolder.id).subscribe((data: any) => {
			console.log(data);
			
			this.listItems = data.items;
		});


	}

}
