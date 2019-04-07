import {Component, ContentChildren, EventEmitter, Output, QueryList} from '@angular/core';

@Component({
	selector: 'san-stepper',
	templateUrl: './san-stepper.component.html',
	styleUrls: ['./san-stepper.component.scss']
})
export class SanStepperComponent {
	@ContentChildren('step') children: QueryList<any>;
	@Output() stepSubmit: EventEmitter<Array<any>> = new EventEmitter();

	constructor() {
	}

	onSubmit = () => {
		const data = [];
		this.children.forEach(item => {
			data.push(item.form);
		});
		this.stepSubmit.emit(data)
	}
}
