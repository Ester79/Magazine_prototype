import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displaynews'
})
export class DisplaynewsPipe implements PipeTransform {

  transform(value: any): any {

    if (screen.width < 768) {
      return value.slice(0, value.length);
    } else {
      return value.slice(0, 2);
    }
  }
}
