import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { BrastlewarkService } from './brastlewark.service';

describe('BrastlewarkService', () => {
  let service: BrastlewarkService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[HttpClient],
      imports:[HttpClientModule]
    });
    service = TestBed.inject(BrastlewarkService);
  });
  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
