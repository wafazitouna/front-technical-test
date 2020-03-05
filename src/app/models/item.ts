export class Item {
	id: string;
	parentId: string;
	name: string;
	folder: boolean;
	creation: Date;
	modification: Date;
	constructor() {
		this.name = '';
	}

}
