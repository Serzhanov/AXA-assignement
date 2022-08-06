import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/heroInterface';

@Pipe({
  name: 'pagenation'
})
export class PagenationPipe implements PipeTransform {
  transform(heroes:Hero[]|undefined, arr:Array<number|undefined>) {
    let start=arr[0]!
    let end=arr[1]!
    return heroes?.filter((element,index)=>{
      if(start<=index&& index<end){
        return true
      }
      return false
    })
  }

}
