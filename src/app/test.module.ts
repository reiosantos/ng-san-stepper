import {NgModule} from '@angular/core';
import {SanStepperModule} from '../ng-san-stepper/san-stepper.module';
import {StepOneFormComponent} from '@san/components/dynamic/step-one-form/step-one-form.component';
import {StepTwoFormComponent} from '@san/components/dynamic/step-two-form/step-two-form.component';
import {
	StepThreeFormComponent
} from '@san/components/dynamic/step-three-form/step-three-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '@san/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
	declarations: [
		StepOneFormComponent,
		StepTwoFormComponent,
		StepThreeFormComponent
	],
	imports: [
		BrowserAnimationsModule,
		ReactiveFormsModule,
		SanStepperModule,
		MaterialModule
	],
	exports: [
		BrowserAnimationsModule,
		ReactiveFormsModule,
		MaterialModule,
		SanStepperModule,
		StepOneFormComponent,
		StepTwoFormComponent,
		StepThreeFormComponent
	],
	providers: []
})

export class TestModule { }
