import { Component } from '@angular/core';
import { ItemService } from './services/item.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalFolderNameComponent } from './components/modal-folder-name/modal-folder-name.component';

@Component({
	selector: 'oo-app',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent  {
	uploadedFiles: File[] = [];
	refresh = true;
	constructor(private itemService: ItemService, private modalService: NgbModal) {

	}

	fileChange(element: any) {
		console.log('fileChange');

		this.uploadedFiles = element.target.files;
		this.upload();
	  }

	  isFileImage(file: any) {
		return file && file.type.split('/')[0] === 'image';
	  }

	  upload() {
		  this.refresh = false;
		const formData = new FormData();
		for (let i = 0; i < this.uploadedFiles.length; i++) {
		  formData.append('uploads[]', this.uploadedFiles[i], this.uploadedFiles[i].name);
		}

		this.itemService.create(formData).subscribe((response: any) => {
		  console.log(response);
			this.refresh = true;


		});

	  }

	openModal() {
		const modalRef = this.modalService.open(ModalFolderNameComponent,
			{
				scrollable: true,
				windowClass: 'myCustomModalClass',
				// keyboard: false,
				// backdrop: 'static'
			});

		modalRef.result.then((result) => {
			console.log(result);
		}, (reason) => {
			console.log(reason);

		});
	}
}
