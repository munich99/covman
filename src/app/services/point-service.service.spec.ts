/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PointServiceService } from './point-service.service';

describe('Service: PointService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PointServiceService]
    });
  });

  it('should ...', inject([PointServiceService], (service: PointServiceService) => {
    expect(service).toBeTruthy();
  }));
});
