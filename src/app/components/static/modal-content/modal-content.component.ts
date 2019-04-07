import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'san-modal-content',
	templateUrl: './modal-content.component.html',
	styleUrls: ['./modal-content.component.scss']
})
export class ModalContentComponent implements OnInit {

	constructor() {
	}

	ngOnInit() {
	}

	onSubmit = (data) => {
		console.log(data);
	}
}
