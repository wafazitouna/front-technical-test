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

	fileChange(element: any) {
		this.uploadedFiles = element.target.files;
	}
	 isFileImage(file: any) {
		return file && file.type.split('/')[0] === 'image';
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

	downloadFile(id: string) {
		this.itemService.getByID(id).subscribe((response) => {
			console.log(response);
		//	let blob:any = new Blob([response.blob()], { type: 'text/json; charset=utf-8' });
		this.writeContents(response, 'test.txt', 'text/txt'); // file extension

		});
	}

	writeContents(content, fileName, contentType) {
		const a = document.createElement('a');
		const file = new Blob([content], {type: contentType});
		a.href = URL.createObjectURL(file);
		a.download = fileName;
		a.click();
	  }
}
