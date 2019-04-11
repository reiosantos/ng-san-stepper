import {NgModule} from '@angular/core';
import {MatDialogModule, MatIconModule, MatStepperModule} from '@angular/material';

@NgModule({
	exports: [
		MatDialogModule,
		MatStepperModule,
		MatIconModule
	]
})
export class MaterialModule {
}
