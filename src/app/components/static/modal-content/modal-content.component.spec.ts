import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ModalContentComponent} from './modal-content.component';
import {TestModule} from '@san/test.module';

describe('ModalContentComponent', () => {
	let component: ModalContentComponent;
	let fixture: ComponentFixture<ModalContentComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ModalContentComponent],
			imports: [TestModule]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ModalContentComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
