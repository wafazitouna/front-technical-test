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

	async getItems() {
	let allItems: Item[] = [];
	await this.itemService.getAll().subscribe((data) => {
	allItems = data;
});
  this.listItems = allItems.filter((item: Item) => item.parentId === this.currentFolder.id);
  console.log(	this.listItems);
  
}

}
