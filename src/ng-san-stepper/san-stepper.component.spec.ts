import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MatDialogModule, MatIconModule, MatStepperModule} from '@angular/material';
import {SanStepperComponent} from '@san-stepper/san-stepper.component';

describe('SanStepperComponent', () => {
	let component: SanStepperComponent;
	let fixture: ComponentFixture<SanStepperComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SanStepperComponent],
			imports: [
				MatStepperModule,
				MatIconModule,
				MatDialogModule
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SanStepperComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create component.', () => {
		expect(component).toBeTruthy();
	});

	it('should Submit Forms', function () {
		const spy = spyOn(component.stepsSubmit, 'emit');
		component.onSubmit();
		expect(spy).toHaveBeenCalled();
	});
});
