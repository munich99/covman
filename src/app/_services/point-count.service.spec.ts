/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PointCountService } from './point-count.service';

describe('Service: PointCount', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PointCountService]
    });
  });

  it('should ...', inject([PointCountService], (service: PointCountService) => {
    expect(service).toBeTruthy();
  }));
});
