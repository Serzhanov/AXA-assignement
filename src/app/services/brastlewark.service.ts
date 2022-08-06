import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HeroesData } from '../interfaces/heroInterface';
@Injectable({
  providedIn: 'root'
})
export class BrastlewarkService {
  
  private DATA_ADRESSE = environment.dataUrl

  constructor(private http:HttpClient) { }

  public fetchData(){
    return this.http.get<HeroesData>(this.DATA_ADRESSE)
  }
}
