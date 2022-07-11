import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'butacas'
})
export class ButacasPipe implements PipeTransform {

  transform(value: number, args: number[]): unknown {
    if(args.includes(value)){
      return 'p-button-success'
    }else{
      return 'p-button-danger'
    }
  }
}
