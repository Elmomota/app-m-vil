import { TestBed } from '@angular/core/testing';

import { ServiceBDService } from './service-bd.service';

describe('ServiceBDService', () => {
  let service: ServiceBDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceBDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
