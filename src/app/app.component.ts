import { Component } from '@angular/core';
import { ItemService } from './services/item.service';

@Component({
	selector: 'oo-app',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent  {
	uploadedFiles: File[];
	
	constructor(private itemService: ItemService) {

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
		this.itemService.create(formData).subscribe((response:any) => {
		  console.log(response);
	
		});
	  }
}
