import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';

@Component({
	selector: 'san-step-three-form',
	templateUrl: './step-three-form.component.html',
	styleUrls: ['./step-three-form.component.scss']
})
export class StepThreeFormComponent implements OnInit {

	public label = 'My Third Form';
	@ViewChild('internalTemplate') public template: TemplateRef<any>;

	constructor() {
	}

	ngOnInit() {
	}

}
