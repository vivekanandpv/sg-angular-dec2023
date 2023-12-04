import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UcClonePipe } from './uc-clone.pipe';
import { SampleComponent } from './sample/sample.component';
import { JsonClonePipe } from './json-clone.pipe';

export interface Person {
  firstName: string;
  lastName: string;
  email: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SampleComponent, JsonClonePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  person: Person = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@gmail.com',
  };

  handleClick(): void {
    //  immutable update: works with both (pure and impure pipes), recommended approach
    // this.person = {
    //   firstName: 'John',
    //   lastName: 'Doe',
    //   email: 'john@gmail.com',
    // };

    //  mutation: requires impure pipe, not recommended
    this.person.email = 'doe@gmail.com';
  }
}
