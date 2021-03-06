import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Item } from '../../models/item';
import { ItemService } from '../../services/item.service';


@Component({
	selector: 'fl-modal-folder-name',
	templateUrl: './modal-folder-name.component.html',
	styleUrls: ['./modal-folder-name.component.css'],
})
export class ModalFolderNameComponent implements OnInit {

	closeResult: string;
	currentFolder: Item;
	newFolder = new Item();

	@Input() public currentFolderID: string;

	constructor(private modalService: NgbModal, private itemService: ItemService,
    public modal: NgbActiveModal) { }

	ngOnInit(): void {

    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
	// Add 'implements OnInit' to the class.
		
		
		this.currentFolder = this.itemService.getCurrentFolder();
		console.log(this.currentFolder );

	}
	open() {
		this.modalService.open('').result.then((result) => {
			this.closeResult = `Closed with: ${result}`;
		}, (reason) => {
			console.log(reason);

		});
	}

	save() {

		this.newFolder.folder = true;
		if (this.currentFolder){
			this.newFolder.parentId = this.currentFolder.id;
			console.log(this.newFolder.parentId);
			
		}
		console.log(this.newFolder);

		this.itemService.create(this.newFolder, this.currentFolder.id).subscribe((res) => {
			console.log(res);
			this.modal.close();
			window.location.reload();
		});
	}

}
