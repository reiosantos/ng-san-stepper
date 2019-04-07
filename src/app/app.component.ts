import {Component} from '@angular/core';
import {MatDialog} from '@angular/material';
import {ModalContentComponent} from '@san/components/static/modal-content/modal-content.component';

@Component({
	selector: 'san-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	private dialogRef;

	constructor(
		private dialog: MatDialog
	) {
	}

	onSubmit = (formData) => {
		console.log('I am leaving', formData)
	};

	openDialog() {
		this.dialogRef = this.dialog.open(ModalContentComponent, {
			data: {
				onSubmit: this.onSubmit
			}
		});
	}
}
