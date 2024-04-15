import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExampleUIComponent } from '../components/templates/example-ui/example-ui.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ExampleUIComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'example_project';
}
