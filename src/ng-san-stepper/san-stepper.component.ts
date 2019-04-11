import {Component, ContentChildren, EventEmitter, Input, Output, QueryList} from '@angular/core';
import {isBoolean} from 'util';
import {MatDialog, MatStepper} from '@angular/material';
import {IOptions} from '@san-stepper/interfaces/IOptions';
import {ConfirmDialogComponent} from '@san-stepper/confirm-dialog/confirm-dialog.component';
import {IStyleOptions} from '@san-stepper/interfaces/IStyleOptions';

@Component({
	selector: 'san-stepper',
	templateUrl: './san-stepper.component.html',
	styleUrls: ['./san-stepper.component.scss']
})
export class SanStepperComponent {
	/**
	 * @ContentChildren type: QueryList<any>
	 *     a list of all transcluded children.
	 */
	@ContentChildren('step') children: QueryList<any>;

	/**
	 * @IOptions to customise steps appearance
	 */
	private readonly _options: IOptions = {
		labelPosition: 'bottom',
		linear: true,
		showLabel: true,
		showActionButtons: true,
	};

	/**
	 * @IStyleOptions Steps to customise display/style options
	 */
	private readonly _styleOptions: IStyleOptions = {
		buttonPosition: 'end',
		backButtonClass: '',
		nextButtonClass: '',
		resetButtonClass: '',
		submitButtonClass: ''
	};

	/**
	 * @Input type: boolean
	 * default `false` for horizontal steps
	 */
	private _verticalSteps = false;

	/**
	 * @Output type: EventEmitter<Array<any>>
	 *     Sends all the components and their current status
	 *     to the user.
	 */
	@Output()	stepsSubmit: EventEmitter<Array<any>> = new EventEmitter();
	@Input() 	styleOptions: object = this._styleOptions;
	@Input() 	options: object = this._options;
	@Input()
	get verticalSteps() {
		return this._verticalSteps;
	}

	set verticalSteps(value) {
		if (isBoolean(value)) {
			this._verticalSteps = value;
			return;
		}
		this._verticalSteps = true;
	}

	constructor(
		private dialog: MatDialog
	) {
		this._styleOptions = {...this._styleOptions, ...this.styleOptions};
		this._options = {...this._options, ...this.options};
	}

	/**
	 * Function called to send final result of all the steps
	 * stepsSubmit, is passed from the parent component
	 */
	onSubmit = () => {
		const data = [];
		this.children.forEach(item => {
			data.push(item.form);
		});
		this.stepsSubmit.emit(data)
	};

	confirmReset(stepper: MatStepper) {
		const dialogRef = this.dialog.open(ConfirmDialogComponent);

		dialogRef.componentInstance.dialogContent = 'You are about to reset all steps. Confirm' +
			' this action.';

		dialogRef.afterClosed().subscribe(result => {
			if (result && result === true) {
				stepper.reset()
			}
		});
	}
}
