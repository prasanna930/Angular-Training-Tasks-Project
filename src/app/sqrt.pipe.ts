import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sqrt',
  //pure: false 
})
export class SqrtPipe implements PipeTransform {

  transform(value: number): number {
    console.log('impure');
    return Math.sqrt(value);
    
  }

}
