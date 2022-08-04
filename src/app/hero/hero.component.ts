import { Component, OnInit } from '@angular/core';
import { Hero, HeroesData } from '../interfaces/heroInterface';
import { BrastlewarkService } from '../services/brastlewark.service';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  protected heroes:Hero[]|undefined
  constructor(public commonService:BrastlewarkService) { }

  ngOnInit(): void {
    this.getHeroes()
  }
  getHeroes(): void {
    this.commonService.fetchData().subscribe((response)=>{
         this.heroes=response.Brastlewark
         console.log(this.heroes)
    })
  }
}
