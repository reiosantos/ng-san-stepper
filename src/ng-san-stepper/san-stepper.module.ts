import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule, MatStepperModule} from '@angular/material';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {SanStepperComponent} from './san-stepper.component';

@NgModule({
	declarations: [
		SanStepperComponent
	],
	imports: [
		CommonModule,
		MatStepperModule,
		MatIconModule
	],
	exports: [
		SanStepperComponent
	],
	providers: [
		{
			provide: STEPPER_GLOBAL_OPTIONS,
			useValue: {displayDefaultIndicatorType: false, showError: true}
		}
	],
})
export class SanStepperModule {
}
