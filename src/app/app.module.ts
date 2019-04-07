import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ModalContentComponent} from '@san/components/static/modal-content/modal-content.component';
import {AppComponent} from '@san/app.component';
import {MaterialModule} from '@san/material.module';
import {StepOneFormComponent} from '@san/components/dynamic/step-one-form/step-one-form.component';
import {StepTwoFormComponent} from '@san/components/dynamic/step-two-form/step-two-form.component';
import {
	StepThreeFormComponent
} from '@san/components/dynamic/step-three-form/step-three-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SanStepperModule} from '@san/../ng-san-stepper/san-stepper.module';

@NgModule({
	entryComponents: [
		ModalContentComponent,
		StepOneFormComponent,
		StepTwoFormComponent,
		StepThreeFormComponent
	],
	declarations: [
		AppComponent,
		ModalContentComponent,
		StepOneFormComponent,
		StepTwoFormComponent,
		StepThreeFormComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		ReactiveFormsModule,
		MaterialModule,
		SanStepperModule
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
