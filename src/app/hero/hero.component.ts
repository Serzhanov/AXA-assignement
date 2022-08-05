import { Component, OnInit } from '@angular/core';
import { Hero } from '../interfaces/heroInterface';
import { BrastlewarkService } from '../services/brastlewark.service';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  protected heroes:Hero[]|undefined
  protected display:boolean=false
 
  protected id:string|undefined
  protected name:string|undefined
  protected age:string|undefined
  protected height:string|undefined
  protected weight:string|undefined
  protected friend:string|undefined
  protected profession:string|undefined
  protected hair_color:string|undefined

  protected currentPage:number=1
  protected pagenationNumber:number=5
  protected startPage:number=0
  protected endPage:number=this.pagenationNumber
  protected numPages:number=0
  constructor(public commonService:BrastlewarkService) { }

  ngOnInit() {
    this.getHeroes()
  }

  getHeroes() {
    this.commonService.fetchData().subscribe((response)=>{
         this.heroes=response.Brastlewark
         this.initPagenation()
    })
  }

  initPagenation(){
    this.numPages=Math.round(this.heroes!.length/this.pagenationNumber)
  }

  nextPage(){
    this.startPage=this.startPage+this.pagenationNumber
    this.endPage=this.endPage+this.pagenationNumber
    this.currentPage+=1
  }

  previousPage(){
    this.startPage=this.startPage-this.pagenationNumber
    this.endPage=this.endPage-this.pagenationNumber
    this.currentPage-=1
  }
  
  paginate(){
   this.startPage=0
   if(this.pagenationNumber<=0||this.pagenationNumber==undefined){
    this.pagenationNumber=0
    this.numPages=this.heroes!.length
    this.endPage=this.numPages
   }
   else{
    this.endPage=this.pagenationNumber
    this.numPages=Math.round(this.heroes!.length/this.pagenationNumber)
   }
  }
}
