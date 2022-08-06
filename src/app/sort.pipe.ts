import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from './interfaces/heroInterface';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(heroes:Hero[]|undefined, arr:Array<any|undefined>) {
    let key=arr[0]
    let ascending=arr[1]
    //case 1-> id ,case 2 -> age ,case 3 -> height, case 4 -> weight
    switch(key){
      case 1:
        return ascending?heroes?.sort((a,b)=>a.id-b.id):heroes?.sort((a,b)=>b.id-a.id)
      case 2:
        return ascending?heroes?.sort((a,b)=>a.age-b.age):heroes?.sort((a,b)=>b.age-a.age)
      case 3:
        return ascending?heroes?.sort((a,b)=>a.height-b.height):heroes?.sort((a,b)=>b.height-a.height)
      case 4:
        return ascending?heroes?.sort((a,b)=>a.weight-b.weight):heroes?.sort((a,b)=>b.weight-a.weight)
    }
    return heroes
  }

}
