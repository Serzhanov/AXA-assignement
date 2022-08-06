import { TestBed } from '@angular/core/testing';
import { HeroComponent } from './hero/hero.component';
import { AppComponent } from './app.component';
import { HttpClient } from '@angular/common/http';
import { SortPipe } from './Pipes/sort.pipe';
import { FilterPipe } from './Pipes/filter.pipe';
import { PagenationPipe } from './Pipes/pagenation.pipe';


describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,HeroComponent,SortPipe,FilterPipe,PagenationPipe
      ],
      providers:[{provide:HttpClient,useValue:{}}]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Brastlewark'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Brastlewark');
  });

 
});
