import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../app.component';

@Component({
  selector: 'app-sample',
  standalone: true,
  imports: [],
  templateUrl: './sample.component.html',
  styleUrl: './sample.component.scss',
})
export class SampleComponent {
  @Input() personFromParent?: Person;
  @Output() onLogin = new EventEmitter<string>();

  handleClick(): void {
    console.log('local handler');
    this.onLogin.emit('Good afternoon from the Sample Component');
  }
}
