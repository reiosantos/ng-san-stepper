import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StepOneFormComponent} from './step-one-form.component';
import {ReactiveFormsModule} from '@angular/forms';

describe('StepOneFormComponent', () => {
	let component: StepOneFormComponent;
	let fixture: ComponentFixture<StepOneFormComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [StepOneFormComponent],
			imports: [ReactiveFormsModule]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(StepOneFormComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
