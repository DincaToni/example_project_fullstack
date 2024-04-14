import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TextArea1Component } from '../components/atoms/text-area1/text-area1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TextArea1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'example_project';
}
