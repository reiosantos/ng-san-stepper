import {Component, OnInit} from '@angular/core';
import {ISanOptions} from '@san-stepper/interfaces/ISanOptions';

@Component({
	selector: 'san-modal-content',
	templateUrl: './modal-content.component.html',
	styleUrls: ['./modal-content.component.scss']
})
export class ModalContentComponent implements OnInit {

	options: ISanOptions = {
		displayType: 'forms',
		formNames: ['form'],
		labels: ['First Step', 'Next Step', 'Last Step'],
		optionalStep: [true]
	};
	styleOptions = {};

	constructor() {
	}

	ngOnInit() {
	}

	onSubmit = (data) => {
		console.log(data);
	}
}
