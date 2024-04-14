import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextArea1Component } from './text-area1.component';

describe('TextArea1Component', () => {
  let component: TextArea1Component;
  let fixture: ComponentFixture<TextArea1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextArea1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextArea1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
