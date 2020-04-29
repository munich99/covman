/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RandomService } from './random.service';

describe('Service: Random', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RandomService]
    });
  });

  it('should ...', inject([RandomService], (service: RandomService) => {
    expect(service).toBeTruthy();
  }));
});
