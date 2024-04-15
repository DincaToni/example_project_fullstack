import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'text-area1',
  standalone: true,
  imports: [],
  templateUrl: './text-area1.component.html',
  styleUrl: './text-area1.component.css',
})
export class TextArea1Component {
  @Input() taValue!: String;
  @Output() taValueChange = new EventEmitter<String>();

  onChange(val: String) {
    this.taValue = val;
    this.taValueChange.emit(this.taValue);
    console.log(this.taValue);
  }
}
