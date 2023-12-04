import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SampleComponent } from './sample/sample.component';

export interface Car {
  make: string;
  model: string;
  year?: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title: string;
  today = new Date();
  car: Car = {
    make: 'Honda',
    model: 'City',
    year: 2022,
  };

  constructor() {
    this.title = 'Hello Angular';
  }

  getName(): string {
    return 'John Doe';
  }

  getGreeting(person: string): string {
    return `Hi, ${person}`;
  }
}
