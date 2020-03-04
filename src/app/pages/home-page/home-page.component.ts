import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/item';

@Component({
  selector: 'fl-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {


  items: Item[] = [];
  uploadedFiles: File[];

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
    this.itemService.create(formData).subscribe((response:any) => {
      console.log(response);

    });
  }

  downloadFile(id: string) {
    console.log(id);

    this.itemService.getByID(id).subscribe((response: any) => {
      console.log(response);
      window.open(window.URL.createObjectURL(response));
      //this.writeContents(name,response.type); // file extension
      const blob = new Blob([response], { type: response.type });
      const url = window.URL.createObjectURL(blob);
      window.open(url);

    });
  }

	// writeContents( fileName:string, contentType:string) {
	// 	const a = document.createElement('a');
	// 	const file = new Blob([content], {type: contentType});
	// 	a.href = URL.createObjectURL(file);
	// 	a.download = fileName;
	// 	a.click();
	//   }

}
