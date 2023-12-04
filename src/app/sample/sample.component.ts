import { Component, Input } from '@angular/core';
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
}
