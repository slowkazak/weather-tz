import { TestBed, inject } from '@angular/core/testing';

import { CityserviceService } from './cityservice.service';

describe('CityserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CityserviceService]
    });
  });

  it('should ...', inject([CityserviceService], (service: CityserviceService) => {
    expect(service).toBeTruthy();
  }));
});
