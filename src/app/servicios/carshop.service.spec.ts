import { TestBed } from '@angular/core/testing';

import { CarshopService } from './carshop.service';

describe('CarshopService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarshopService = TestBed.get(CarshopService);
    expect(service).toBeTruthy();
  });
});
