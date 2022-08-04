import { Pipe, PipeTransform } from '@angular/core';
import {Hero} from './interfaces/heroInterface'
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // transform(heroes:Hero[]|undefined,switcherKey:number|undefined,key:string|undefined,arr:Array<string|undefined>) {

  //   switch(Number(switcherKey)){
  //     case 1:
  //       heroes=heroes?.filter(element=>element.id==Number(key))
  //       break;
  //     case 2:
  //       heroes=heroes?.filter(element=>element.name===key||element.name.includes(arr[1]!))
  //       break;
  //     case 3:
  //       heroes=heroes?.filter(element=>element.age==Number(arr[0]))
  //       break;
  //     case 4:
  //       heroes=heroes?.filter(element=>element.height==Number(key))
  //       break;
  //     case 5:
  //       heroes=heroes?.filter(element=>element.weight==Number(key))
  //       break;
  //     case 6:
  //       heroes=heroes?.filter(element=>element.hair_color===key||element.name.includes(key!))
  //       break;
  //     case 7:
  //       heroes=heroes?.filter(element=>element.friends.includes(key!))
  //       break;
  //     case 8:
  //       heroes=heroes?.filter(element=>element.professions.includes(key!))
  //       break;
  //     default:
  //       console.log("default case")
  //   }
  //   return heroes
  // }
  transform(heroes:Hero[]|undefined,arr:Array<string|undefined>) {
    console.log(arr)
    if(this.allAreUndefined(arr)){
      return heroes
    }
    let tempObj:any={}
    heroes=heroes?.filter(element=>{

      if(arr[0])element.id===Number(arr[0])?tempObj['id']=true:this.justForOneLineCase()
      if(arr[1])element.name===arr[1]||element.name.includes(arr[1]!)?tempObj['name']=true:this.justForOneLineCase()
      if(arr[2])element.age===Number(arr[2])?tempObj['age']=true:this.justForOneLineCase()
      if(arr[3])element.height===Number(arr[3])?tempObj['height']=true:this.justForOneLineCase()
      if(arr[4])element.weight===Number(arr[4])?tempObj['weight']=true:this.justForOneLineCase()
      if(arr[5])element.hair_color===arr[5]||element.hair_color.includes(arr[5]!)?tempObj['hair_color']=true:this.justForOneLineCase()
      if(arr[6])element.friends.includes(arr[6]!)?tempObj['friends']=true:this.justForOneLineCase()
      if(arr[7])element.professions.includes(arr[7]!)?tempObj['profession']=true:this.justForOneLineCase()

      //I have to check if all keys of tempObj are equal to keys in heroes to make filtering by multiple criteria
      let elementInAny=element as any
      let keys=Object.keys(tempObj)
      console.log(keys)
      for(let i=0;i<keys.length;i++){
        if(elementInAny[keys[i].toString()]===tempObj[keys.toString()]) return true
      }
      return true
      
    })
    console.log(tempObj)
    return heroes
  }

  allAreUndefined(array:Array<string|undefined>) {
    for(let i=0;i<array.length;i++){
      if(array[i]!=undefined){
        return false
      }
    }
  
    return true;
  }

  justForOneLineCase(){
    return
  }
  
}

