export class ISanOptions {
	labelPosition?: 'bottom' | 'end';
	linear?: boolean;
	showLabel?: boolean;
	labels?: Array<string>;
	templateNames?: Array<string>;
	showActionButtons?: boolean;
	showResetButton?: boolean;
	displayType?: 'forms' | 'text' | 'mixed';
	formNames?: Array<string>;
	lastPageText?: string;
	hideLastStep?: boolean;
	showLastStepButtons?: boolean;
	optionalStep?: Array<boolean>;
}
