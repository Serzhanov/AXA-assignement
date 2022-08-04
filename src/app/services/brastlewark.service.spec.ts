import { TestBed } from '@angular/core/testing';

import { BrastlewarkService } from './brastlewark.service';

describe('BrastlewarkService', () => {
  let service: BrastlewarkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrastlewarkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
