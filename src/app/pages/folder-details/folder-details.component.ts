import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../../models/item';
import { ItemService } from '../../services/item.service';


@Component({
	selector: 'fl-folder-details',
	templateUrl: './folder-details.component.html',
	styleUrls: ['./folder-details.component.css'],
})
export class FolderDetailsComponent implements OnInit  {

	currentFolder: Item;
	listItems: Item[] = [];
	currentFolderID: string;

	constructor(private itemService: ItemService, private route: ActivatedRoute) { }

	ngOnInit() {
		 this.route.params.subscribe((params) => {
			console.log(params.id); // log the value of id
			this.currentFolderID = params.id;
		  });
		this.currentFolder = this.itemService.getCurrentFolder();
		this.getItems();
	}

	/**
	 * get items for current folder
	 */

	getItems() {

		this.itemService.getChildren(this.currentFolderID).subscribe((data: any) => {
			console.log(data);

			this.listItems = data.items;
		});

	}

}

