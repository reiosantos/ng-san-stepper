import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatDialogModule, MatIconModule, MatStepperModule} from '@angular/material';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {SanStepperComponent} from '@san-stepper/san-stepper.component';
import {ConfirmDialogComponent} from '@san-stepper/confirm-dialog/confirm-dialog.component';

@NgModule({
	declarations: [
		SanStepperComponent,
		ConfirmDialogComponent,
	],
	entryComponents: [
		ConfirmDialogComponent
	],
	imports: [
		CommonModule,
		MatStepperModule,
		MatIconModule,
		MatButtonModule,
		MatDialogModule
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
