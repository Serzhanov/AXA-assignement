import { Component, OnInit } from '@angular/core';
import { Hero } from '../interfaces/heroInterface';
import { BrastlewarkService } from '../services/brastlewark.service';
import { FilterPipe } from '../Pipes/filter.pipe';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  public heroes:Hero[]|undefined
  protected display:boolean=false
  
  protected id:string|undefined
  protected name:string|undefined
  protected age:string|undefined
  protected height:string|undefined
  protected weight:string|undefined
  protected friend:string|undefined
  protected profession:string|undefined
  protected hair_color:string|undefined

  public currentPage:number=1
  public currentPageIndicator:number=1
  public paginationNumber:number=5
  public startPage:number=0
  public endPage:number=this.paginationNumber
  public numPages:number=0
  public previousStateOfNumPages:number=this.numPages

  protected keyToSort:number=0
  protected ascending=true

  protected isSortedAscending:string[]=['','','','']
  protected disablingButton:boolean[]=[true,false]

  constructor(private commonService:BrastlewarkService) { }

  ngOnInit() {
    this.getHeroes()
  }

  getHeroes() {
    this.commonService.fetchData().subscribe({
      next : (response)=>{
        this.heroes=response.Brastlewark
        this.initPagenation()
      },
      error:(e)=>{
        alert("an error occurred while loading data,please try later "+ e.toString())
      }
    })
  }

  initPagenation(){
    //TO DO
    //Find better solution to make responsive the current page after filtering
    let filterPipe=new FilterPipe()
    let output=filterPipe.transform(this.heroes,[this.id,this.name,this.age,this.height,this.weight,this.hair_color,this.friend,this.profession])
    this.numPages=Math.round(output!.length/this.paginationNumber)
    this.numPages=this.numPages===0?1:this.numPages

    
  }

  nextPage(){
    this.disablingButton[0]=false
    if(this.currentPage<this.numPages){
      this.startPage=this.startPage+this.paginationNumber
      this.endPage=this.endPage+this.paginationNumber
      this.currentPage+=1
    }
    else{
      this.disablingButton[1]=true
    }
  }

  previousPage(){
    this.disablingButton[1]=false
    if(this.currentPage>1){
      this.startPage=this.startPage-this.paginationNumber
      this.endPage=this.endPage-this.paginationNumber
      this.currentPage-=1
    }
    else{
      this.disablingButton[0]=true
    }
  }
  
  paginate(){
    this.startPage=0
    if(this.paginationNumber<=0||this.paginationNumber==undefined){
      this.paginationNumber=0
      this.numPages=this.heroes!.length
      this.endPage=this.numPages
    }
    else{
      this.endPage=this.paginationNumber
      this.numPages=Math.round(this.heroes!.length/this.paginationNumber)
    }
  }

  setName(nameOfFriend:string){
    this.name=nameOfFriend
    this.initPagenation()
  }
  setProfession(nameOfProfession:string){
    this.profession=nameOfProfession
    this.initPagenation()
  }

  goto(){
    while((this.currentPageIndicator!=this.currentPage) && (this.currentPageIndicator>=1 && this.currentPageIndicator<=this.numPages) && (this.currentPage!=null && this.currentPage!=undefined && this.currentPage>0)){
      if(this.currentPage<this.currentPageIndicator){
        this.nextPage()
      }
      else{
        this.previousPage();
      }
    }
    return this.currentPage
  }

  setKeyAndOrderToSort(keyToSort:number){
    //case 1-> id ,case 2 -> age ,case 3 -> height, case 4 -> weight
    this.keyToSort=keyToSort
    this.changeSort(keyToSort)
    this.ascending=!this.ascending
  }

  changeSort(key:number){
    switch(key){
      case 1:
        this.isSortedAscending[0]=this.isSortedAscending[0]===''?'↓':'' 
        break
      case 2:
        this.isSortedAscending[1]=this.isSortedAscending[1]===''?'↓':''
        break
      case 3:
        this.isSortedAscending[2]=this.isSortedAscending[2]===''?'↓':''
        break
      case 4:
        this.isSortedAscending[3]=this.isSortedAscending[3]===''?'↓':''
        break
    }
  }
}
