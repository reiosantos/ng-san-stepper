import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
	selector: 'san-step-one-form',
	templateUrl: './step-one-form.component.html',
	styleUrls: ['./step-one-form.component.scss']
})
export class StepOneFormComponent implements OnInit {

	public form: FormGroup;

	public label = 'My Fist Form';
	@ViewChild('internalTemplate') public template: TemplateRef<any>;

	constructor(private fb: FormBuilder) {
		this.form = this.fb.group({
			username: new FormControl('', [Validators.required]),
			password: new FormControl('', []),
		})
	}

	ngOnInit() {

	}

}
