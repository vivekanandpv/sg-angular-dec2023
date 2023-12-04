import { Pipe, PipeTransform } from '@angular/core';
import { Person } from './app.component';

@Pipe({
  name: 'jsonClone',
  standalone: true,
  pure: false, //  true by default
})
export class JsonClonePipe implements PipeTransform {
  transform(value: Person): string {
    return JSON.stringify(value, null, 4);
  }
}
