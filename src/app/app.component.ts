import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UcClonePipe } from './uc-clone.pipe';
import { SampleComponent } from './sample/sample.component';

export interface Person {
  firstName: string;
  lastName: string;
  email: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  person: Person = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@gmail.com',
  };
}
