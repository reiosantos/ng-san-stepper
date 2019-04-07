import {NgModule} from '@angular/core';
import {MatDialogModule, MatIconModule, MatStepperModule} from '@angular/material';

@NgModule({
	imports: [
		MatDialogModule,
		MatStepperModule,
		MatIconModule
	],
	exports: [
		MatDialogModule,
		MatStepperModule,
		MatIconModule
	]
})
export class MaterialModule {
}
