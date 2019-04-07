import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SanStepperComponent} from './san-stepper.component';
import {MatIconModule, MatStepperModule} from '@angular/material';

describe('SanStepperComponent', () => {
	let component: SanStepperComponent;
	let fixture: ComponentFixture<SanStepperComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SanStepperComponent],
			imports: [
				MatStepperModule,
				MatIconModule
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
});
