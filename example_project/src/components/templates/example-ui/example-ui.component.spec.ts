import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleUIComponent } from './example-ui.component';

describe('ExampleUIComponent', () => {
  let component: ExampleUIComponent;
  let fixture: ComponentFixture<ExampleUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleUIComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExampleUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
