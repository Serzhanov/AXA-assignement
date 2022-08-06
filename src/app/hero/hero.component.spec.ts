import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../Pipes/filter.pipe';
import { PagenationPipe } from '../Pipes/pagenation.pipe';
import { BrastlewarkService } from '../services/brastlewark.service';
import { SortPipe } from '../Pipes/sort.pipe';
import { mockingDataForTeting } from '../interfaces/heroInterface';
import { HeroComponent } from './hero.component';

describe('HeroComponent', () => {
  let component: HeroComponent;
  let fixture: ComponentFixture<HeroComponent>;
  let service :BrastlewarkService
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroComponent ,SortPipe,FilterPipe,PagenationPipe],
      providers:[],
      imports:[HttpClientModule,FormsModule]
    })
    .compileComponents();
    service = TestBed.inject(BrastlewarkService);
    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe("Pages Testing",()=>{
    it('should call fetchData and output should be defined', () => {
      service.fetchData().subscribe(response=>{
        expect(response).toBeDefined()
      })
    });
  
    it('should go to page number 6',()=>{
      component.currentPageIndicator=6
      component.numPages=mockingDataForTeting.length
      
      expect(component.goto()).toEqual(component.currentPageIndicator)
    })
  
    it('should not go to page number -1',()=>{
      component.currentPageIndicator=-1
      component.numPages=mockingDataForTeting.length
      component.goto()
      expect(component.currentPage!=component.currentPageIndicator).toBeTrue()
    })
  
    it('should not go to page number 0',()=>{
      component.currentPageIndicator=0
      component.numPages=mockingDataForTeting.length
      component.goto()
      expect(component.currentPage!=component.currentPageIndicator).toBeTrue()
    })
  
    it('should not go to page number maxPages+1',()=>{
      component.currentPageIndicator=mockingDataForTeting.length+1
      component.numPages=mockingDataForTeting.length
      component.goto()
      expect(component.currentPage!=component.currentPageIndicator).toBeTrue()
    })
  })

  describe("Pagination testing",()=>{
    it('should paginate the data by 10',()=>{
      component.startPage=0
      component.endPage=5
      component.pagenationNumber=10
      component.numPages=mockingDataForTeting.length
      component.heroes=mockingDataForTeting
      component.paginate()
      expect(component.endPage%10===0 && component.startPage==0).toBeTrue()
    })

    it('should not paginate the data by -1',()=>{
      component.startPage=0
      component.endPage=5
      component.pagenationNumber=-1
      component.numPages=mockingDataForTeting.length
      component.heroes=mockingDataForTeting
      component.paginate()
      expect(component.endPage==component.numPages && component.startPage==0).toBeTrue()
    })


    it('should not paginate the data by num of pages , should render the data in one page,so endPages would be length of data,but numPages =1 ',()=>{
      component.startPage=0
      component.endPage=5
      component.pagenationNumber=mockingDataForTeting.length
      component.numPages=mockingDataForTeting.length
      component.heroes=mockingDataForTeting
      component.paginate()
      expect(component.numPages==1 &&component.endPage==mockingDataForTeting.length && component.startPage==0).toBeTrue()
    })
  })

});
