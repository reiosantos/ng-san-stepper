import {
	Component,
	ContentChildren,
	EventEmitter,
	Input,
	OnInit,
	Output,
	QueryList
} from '@angular/core';
import {isBoolean} from 'util';
import {MatDialog, MatStepper} from '@angular/material';
import {ISanOptions} from '@san-stepper/interfaces/ISanOptions';
import {ConfirmDialogComponent} from '@san-stepper/confirm-dialog/confirm-dialog.component';
import {ISanStyleOptions} from '@san-stepper/interfaces/ISanStyleOptions';

@Component({
	selector: 'san-stepper',
	templateUrl: './san-stepper.component.html',
	styleUrls: ['./san-stepper.component.scss']
})
export class SanStepperComponent implements OnInit {
	/**
	 * @ContentChildren type: QueryList<any>
	 *     a list of all transcluded children.
	 */
	@ContentChildren('step') children: QueryList<any>;

	/**
	 * @IOptions to customise steps appearance
	 */
	private _options: ISanOptions = {
		labelPosition: 'bottom',
		linear: true,
		showLabel: true,
		showActionButtons: true,
		showResetButton: true,
		hideLastStep: false,
		showLastStepButtons: true,
		displayType: 'mixed',
		labels: [],
		templateNames: [],
		lastPageText: 'It stops here, Choose any of the actions below.'
	};

	/**
	 * @IStyleOptions Steps to customise display/style options
	 */
	private _styleOptions: ISanStyleOptions = {
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
	@Input() 	styleOptions: ISanStyleOptions = this._styleOptions;
	@Input() 	options: ISanOptions = this._options;
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
	) {}

	ngOnInit() {
		this._styleOptions = {...this._styleOptions, ...this.styleOptions};
		this.validateOptions();

		this._options = {...this._options, ...this.options};
	}

	/**
	 * Validate options and raise error
	 * if not in the desired format
	 */
	validateOptions = () => {
		if (!['forms', 'text', 'mixed'].includes(this.options.displayType)) {
			throw Error(
				'`displayType` can only be one of the following ["forms", "text",' + ' "mixed"]'
			);
		}
		if (this.displayType() === 'forms') {
			if (!Array.isArray(this.options.formNames)) {
				throw Error(
					'option: `displayType="forms"` requires option `formNames`'
				);
			}
		}
		return true;
	};

	displayType = () => this._options.displayType;
	/**
	 * Function called to send final result of all the steps
	 * stepsSubmit, is passed from the parent component
	 */
	onSubmit = () => {
		const data = [];
		this.children.forEach((item, index) => {
			if (this.displayType() === 'forms') {
				data.push(item[this._options.formNames[index]]);
			} else {
				data.push(item);
			}
		});
		this.stepsSubmit.emit(data);
	};

	confirmReset(stepper: MatStepper) {
		const dialogRef = this.dialog.open(ConfirmDialogComponent);

		dialogRef.componentInstance.dialogContent = 'You are about to reset all steps. Confirm' +
			' this action.';

		dialogRef.afterClosed().subscribe(result => {
			if (result && result === true) {
				stepper.reset();
			}
		});
	}

	getLabel = (index) => {
		return this._options.labels[index] || 'Step ' + (index + 1);
	};

	getTemplate = (stepComponent, index) => {
		const name = this._options.templateNames[index] || 'template';
		return stepComponent[name];
	};

	getStepControl = (stepComponent, index) => {
		if (this.validateOptions() && this.displayType() === 'forms') {
			return stepComponent[this._options.formNames[index]];
		}
	}
}
