import { Component } from '@angular/core';
import { ItemService } from './services/item.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalFolderNameComponent } from './components/modal-folder-name/modal-folder-name.component';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'oo-app',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent  {
	uploadedFiles: File[] = [];
	refresh = true;
	currentFolderID: string;

	constructor(private itemService: ItemService, private modalService: NgbModal,
		private route: ActivatedRoute) {

	}
	ngOninit() {
	this.route.params.subscribe((params) => {
		console.log(params.id); // log the value of id
		this.currentFolderID = params.id;
	  });
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

		this.itemService.create(formData, this.currentFolderID).subscribe((response: any) => {
		 console.log(response);
		 window.location.reload();

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
			modalRef.componentInstance.currentFolderID = this.currentFolderID;
		modalRef.result.then((result) => {
			console.log(result);
		}, (reason) => {
			console.log(reason);

		});
	}
}
