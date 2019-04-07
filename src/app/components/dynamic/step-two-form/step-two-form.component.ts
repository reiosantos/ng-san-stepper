import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';

@Component({
	selector: 'san-step-two-form',
	templateUrl: './step-two-form.component.html',
	styleUrls: ['./step-two-form.component.scss']
})
export class StepTwoFormComponent implements OnInit {

	public label = 'My Second Form';
	@ViewChild('internalTemplate') public template: TemplateRef<any>;

	constructor() {
	}

	ngOnInit() {
	}

}
