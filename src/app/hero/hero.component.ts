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


  constructor(public commonService:BrastlewarkService) { }

  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes(): void {
    this.commonService.fetchData().subscribe((response)=>{
         this.heroes=response.Brastlewark
    })
  }
 
}
