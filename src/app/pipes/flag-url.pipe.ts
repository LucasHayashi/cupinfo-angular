import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../environments/environment';

@Pipe({
  name: 'flagUrl',
})
export class FlagUrlPipe implements PipeTransform {
  transform(country: string): unknown {
    return environment.flagUrl + '/' + country;
  }
}
