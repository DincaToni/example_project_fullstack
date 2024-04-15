import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'submit-button1',
  standalone: true,
  imports: [],
  templateUrl: './submit-button1.component.html',
  styleUrl: './submit-button1.component.css',
})
export class SubmitButton1Component {
  @Input() results!: String[];
  @Output() resultsChange = new EventEmitter<String[]>();

  onSubmit = () => {
    this.results.push('');
    this.resultsChange.emit(this.results);
    console.log(this.results);
  };
}
