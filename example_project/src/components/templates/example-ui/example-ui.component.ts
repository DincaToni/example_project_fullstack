import { Component } from '@angular/core';
import { TextArea1Component } from '../../atoms/text-area1/text-area1.component';
import { SubmitButton1Component } from '../../atoms/submit-button1/submit-button1.component';
import { DisplayBlock1Component } from '../../atoms/display-block1/display-block1.component';
import { RadioGroupComponent } from '../../atoms/radio-group/radio-group.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'example-ui',
  standalone: true,
  imports: [
    TextArea1Component,
    SubmitButton1Component,
    DisplayBlock1Component,
    RadioGroupComponent,
    CommonModule,
  ],
  templateUrl: './example-ui.component.html',
  styleUrl: './example-ui.component.css',
})
export class ExampleUIComponent {
  resultsArr: String[] = [];
  textAreaValue: String = '';
  analysisType: String = '';
}
