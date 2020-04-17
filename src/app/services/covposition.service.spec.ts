/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CovpositionService } from './covposition.service';

describe('Service: Covposition', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CovpositionService]
    });
  });

  it('should ...', inject([CovpositionService], (service: CovpositionService) => {
    expect(service).toBeTruthy();
  }));
});
