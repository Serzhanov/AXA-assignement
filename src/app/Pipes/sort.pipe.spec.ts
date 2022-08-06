import { SortPipe } from './sort.pipe';
import {mockingDataForTeting} from '../interfaces/heroInterface'

describe('SortPipe', () => {
  it('create an instance', () => {
    const pipe = new SortPipe();
    expect(pipe).toBeTruthy();
  });
  let pipe = new SortPipe ();

  it('should filter by id ascneding',()=>{
    let keyToSort=1
    let ascending=true
    let output=pipe.transform(mockingDataForTeting,[keyToSort,ascending])
    let issue=false
    let index=0
    while(index<output!.length-1&&!issue){
      if(output![index].id>output![index+1].id) issue=true
      index+=1
    }
    expect(issue).toBeFalse()
  })

  it('should filter by id descending',()=>{
    let keyToSort=1
    let ascending=false
    let output=pipe.transform(mockingDataForTeting,[keyToSort,ascending])
    let issue=false
    let index=0
    while(index<output!.length-1&&!issue){
      if(output![index].id<=output![index+1].id) issue=true
      index+=1
    }
    expect(issue).toBeFalse()
  })
});
