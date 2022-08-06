import { Pipe, PipeTransform } from '@angular/core';
import {Hero} from '../interfaces/heroInterface'
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(heroes:Hero[]|undefined,arr:Array<string|undefined>) {
    if(this.allAreUndefined(arr)){
      return heroes
    }
    let tempObj:any={}
    let permissionArr:boolean[]=new Array(heroes?.length).fill(false)

    //Trying to fill tempElment to reach out the multiple filtering at the same time by setting 'true' value on relative index in permissionArr
    //then by looping permissionArr we can get filtered values with value 'true' 

    heroes?.filter((element,index)=>{
       
      if(arr[0])element.id===Number(arr[0])?tempObj['id']=Number(arr[0]):this.justForOneLineCase()
      if(arr[1])element.name===arr[1]||element.name.includes(arr[1]!)?tempObj['name']=arr[1]:this.justForOneLineCase()
      if(arr[2])element.age===Number(arr[2])?tempObj['age']=Number(arr[2]):this.justForOneLineCase()
      if(arr[3])element.height===Number(arr[3])?tempObj['height']=Number(arr[3]):this.justForOneLineCase()
      if(arr[4])element.weight===Number(arr[4])?tempObj['weight']=Number(arr[4]):this.justForOneLineCase()
      if(arr[5])element.hair_color===arr[5]||element.hair_color.includes(arr[5]!)?tempObj['hair_color']=arr[5]:this.justForOneLineCase()
      if(arr[6])tempObj=this.checkSubStrings(element.friends,arr,tempObj,'friends',6)
      if(arr[7])tempObj=this.checkSubStrings(element.professions,arr,tempObj,'professions',7)

      let elementAsAny = element as any
      Object.keys(tempObj).every((e) => {
        if(typeof tempObj[e] === 'number'){
            if(elementAsAny[e]==tempObj[e]){
              permissionArr[index]=true
            }
          }
        else{
          if(elementAsAny[e].toString().includes(tempObj[e].toString())){
            permissionArr[index]=true
          }
        }
      })
    })
    
    heroes=heroes?.filter((element,index)=>{
      if(permissionArr[index]==true){
        return element
      }
      return false
    })
    return heroes
  }


  allAreUndefined(array:Array<string|undefined>) {
    for(let i=0;i<array.length;i++){
      if(array[i]!=undefined&&array[i]!=''){
        return false
      }
    }
    return true;
  }

  justForOneLineCase(){
    return
  }
  
  checkSubStrings(chaine:String[],arr:any,tempObj:any,key:string,numSwithcer:number){
    for(let i=0;i<chaine.length;i++){
      if(chaine[i]!=undefined && chaine[i].includes(arr[numSwithcer])){
        tempObj[key]=arr[numSwithcer]
      }
    }
    return tempObj
  }
  
}

