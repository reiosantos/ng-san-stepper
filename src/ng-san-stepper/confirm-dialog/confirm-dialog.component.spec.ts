import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {ConfirmDialogComponent} from '@san-stepper/confirm-dialog/confirm-dialog.component';
import {MatDialogModule} from '@angular/material';


describe('ConfirmDialogComponent', () => {
	let component: ConfirmDialogComponent;
	let fixture: ComponentFixture<ConfirmDialogComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ConfirmDialogComponent ],
			imports: [MatDialogModule]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ConfirmDialogComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
