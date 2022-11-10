import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onlyoneerror'
})
export class OnlyoneerrorPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

