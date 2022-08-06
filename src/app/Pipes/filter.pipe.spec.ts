import { FilterPipe } from './filter.pipe';
import {mockingDataForTeting} from '../interfaces/heroInterface'
describe('FilterPipe', () => {
 
  it('create an instance', () => {
    const pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
  });
  let pipe = new FilterPipe ();
  let arraySwitcher=['','','','','','','','']

  it('should filter by id',()=>{
    arraySwitcher[0]='15'
    let output =pipe.transform(mockingDataForTeting,arraySwitcher)
    expect(output?.length===1 && output[0].id===15).toBeTrue()
    arraySwitcher[0]=''
  })
  
  it('should filter by name Fizkin',()=>{
    arraySwitcher[1]='Fizkin'
    let output =pipe.transform(mockingDataForTeting,arraySwitcher)
    let issue=false
    let index=0;
    while(index<output!.length && issue==false){
      if(!output![index].name.includes('Fizkin')) issue=true
      index+=1
    }
    expect(issue).toBeFalse()
    arraySwitcher[1]=''
  })

  it ('should filter by age and name at the same time,Fizkin and id 1',()=>{
    arraySwitcher[1]='Fizkin'
    arraySwitcher[0]='1'
    let output =pipe.transform(mockingDataForTeting,arraySwitcher)
    expect(output!.length===1 && output![0].id==1 && output![0].name.includes('Fizkin')).toBeTrue()
    arraySwitcher[1]=''
    arraySwitcher[0]=''
  })
  
  it('should filter by friends with name Emmadette',()=>{
    arraySwitcher[6]='Emmadette'
    let output =pipe.transform(mockingDataForTeting,arraySwitcher)
    let issue=false
    let index=0;
    while(index<output!.length && issue==false){
      let index2=0
      let answer=false
      while (index2<output![index].friends.length && issue==false ){
        //if name has appeared only one in friends ,then it's ok
        if(output![index].friends[index2].includes('Emmadette')) answer=true
        index2+=1
      }
      if(!answer) issue=true
      index+=1
    }
    arraySwitcher[6]=''
    expect(issue).toBeFalse()
  })
});
