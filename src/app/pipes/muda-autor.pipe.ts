import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mudaAutor'
})
export class MudaAutorPipe implements PipeTransform {

  transform(value: string[]): string {
    if (!value || value.length === 0) {
      return '';
    }
    if (value.length === 1) {
      return value[0];
    }
    const autor2 = value.pop();
    return `${value.join(', ')} e ${autor2}`;
  }

}
