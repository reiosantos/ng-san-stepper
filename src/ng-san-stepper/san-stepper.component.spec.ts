import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SanStepperComponent} from './san-stepper.component';

describe('DialogTemplateComponent', () => {
	let component: SanStepperComponent;
	let fixture: ComponentFixture<SanStepperComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SanStepperComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SanStepperComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
