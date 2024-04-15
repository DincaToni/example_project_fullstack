import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitButton1Component } from './submit-button1.component';

describe('SubmitButton1Component', () => {
  let component: SubmitButton1Component;
  let fixture: ComponentFixture<SubmitButton1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmitButton1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubmitButton1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
