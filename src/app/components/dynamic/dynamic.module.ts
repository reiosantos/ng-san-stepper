import {NgModule} from '@angular/core';
import {StepOneFormComponent} from './step-one-form/step-one-form.component';
import {StepTwoFormComponent} from './step-two-form/step-two-form.component';
import {StepThreeFormComponent} from './step-three-form/step-three-form.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
	declarations: [
		StepOneFormComponent,
		StepTwoFormComponent,
		StepThreeFormComponent
	],
	entryComponents: [
		StepOneFormComponent,
		StepTwoFormComponent,
		StepThreeFormComponent
	],
	imports: [
		ReactiveFormsModule
	]
})

export class DynamicModule {
}
