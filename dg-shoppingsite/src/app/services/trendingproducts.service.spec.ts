import { TestBed } from '@angular/core/testing';

import { TrendingproductsService } from './trendingproducts.service';

describe('TrendingproductsService', () => {
  let service: TrendingproductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrendingproductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
