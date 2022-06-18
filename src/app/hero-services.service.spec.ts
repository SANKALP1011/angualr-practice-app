import { TestBed } from '@angular/core/testing';

import { HeroServicesService } from './hero-services.service';

describe('HeroServicesService', () => {
  let service: HeroServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
