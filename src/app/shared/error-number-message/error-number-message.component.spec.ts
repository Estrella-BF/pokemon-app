import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorNumberMessageComponent } from './error-number-message.component';

describe('ErrorNumberMessageComponent', () => {
  let component: ErrorNumberMessageComponent;
  let fixture: ComponentFixture<ErrorNumberMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorNumberMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorNumberMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
