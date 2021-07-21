import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe',
})
export class MyPipePipe implements PipeTransform {
  transform(value: any, isToggle: boolean): string {
    if (!isToggle) {
      if (value.length > 300) {
        return value.substring(0, 300) + '...';
      }
    }
    return value;
  }
}
