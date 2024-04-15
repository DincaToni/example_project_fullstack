import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayBlock1Component } from './display-block1.component';

describe('DisplayBlock1Component', () => {
  let component: DisplayBlock1Component;
  let fixture: ComponentFixture<DisplayBlock1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayBlock1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayBlock1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
