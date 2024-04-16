import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'toggle-switch',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './toggle-switch.component.html',
  styleUrl: './toggle-switch.component.css',
})
export class ToggleSwitchComponent {
  @Input() isSwitchOn!: boolean;
  @Output() isSwitchOnChange = new EventEmitter<boolean>();

  toggleSwitch() {
    console.log('Switch state changed:', this.isSwitchOn);
    this.isSwitchOnChange.emit(this.isSwitchOn);
  }
}
