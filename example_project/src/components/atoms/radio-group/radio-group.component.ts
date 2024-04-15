import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'radio-group',
  standalone: true,
  imports: [],
  templateUrl: './radio-group.component.html',
  styleUrl: './radio-group.component.css',
})
export class RadioGroupComponent {
  @Input() checkedVal!: String;
  @Output() checkedValChange = new EventEmitter<String>();
  onChange(val: any) {
    for (const element of val) {
      this.checkedVal = element.checked ? element.value : this.checkedVal;
    }
    this.checkedValChange.emit(this.checkedVal);
    console.log(this.checkedVal);
  }
}
