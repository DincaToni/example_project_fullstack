import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TextArea1Component } from '../components/atoms/text-area1/text-area1.component';
import { SubmitButton1Component } from '../components/atoms/submit-button1/submit-button1.component';
import { DisplayBlock1Component } from '../components/atoms/display-block1/display-block1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TextArea1Component,
    SubmitButton1Component,
    DisplayBlock1Component,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'example_project';
}
