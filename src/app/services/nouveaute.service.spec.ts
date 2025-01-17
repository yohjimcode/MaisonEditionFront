import { TestBed } from '@angular/core/testing';

import { LivresService } from './nouveaute.service';

describe('LivresService', () => {
  let service: LivresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LivresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
