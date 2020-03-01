import { Component, OnInit } from '@angular/core';
import { Item } from './models/item';
import { ItemService } from './services/item.service';

@Component({
	selector: 'oo-app',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

	items: Item[] = [];
	uploadedFiles: File[] ;

	constructor(private itemService: ItemService) {

	}
	ngOnInit(): void {
		// Called after the constructor, initializing input properties, and the first call to ngOnChanges.
		// Add 'implements OnInit' to the class.
		this.itemService.getAll().subscribe((res: any) => {
			this.items = res.items;
			console.log(this.items);

		});
	}

	fileChange(element:any) {
        this.uploadedFiles = element.target.files;
	}
	

	upload() {
		const formData = new FormData();
		for (let i = 0; i < this.uploadedFiles.length; i++) {
			formData.append('uploads[]', this.uploadedFiles[i], this.uploadedFiles[i].name);
		}
		// this.http.post('/api/upload', formData)
		// 	.subscribe((response) => {
		// 	 console.log('response received is ', response);
		// 	});
		this.itemService.create(formData).subscribe((response) => {
			console.log(response);

		});
	}
}
