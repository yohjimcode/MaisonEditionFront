import { TestBed } from '@angular/core/testing';

import { LivreServiceTsService } from './livre.service.ts.service';

describe('LivreServiceTsService', () => {
  let service: LivreServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LivreServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
