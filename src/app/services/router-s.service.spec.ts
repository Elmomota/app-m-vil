import { TestBed } from '@angular/core/testing';

import { RouterSService } from './router-s.service';

describe('RouterSService', () => {
  let service: RouterSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouterSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
