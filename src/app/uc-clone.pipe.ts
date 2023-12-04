import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ucClone',
  standalone: true,
})
export class UcClonePipe implements PipeTransform {
  transform(value: string, ...args: string[]): string {
    return `${value.toUpperCase()}--${args.toString}`;
  }
}
