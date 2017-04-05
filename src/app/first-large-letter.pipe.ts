import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstLargeLetter'
})
export class FirstLargeLetterPipe implements PipeTransform {

  transform(value:any):any {
      
        if (value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
        }
        return value;
    }
}
