/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { KeystrokeService } from './keystroke.service';

describe('Service: Keystroke', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KeystrokeService]
    });
  });

  it('should ...', inject([KeystrokeService], (service: KeystrokeService) => {
    expect(service).toBeTruthy();
  }));
});
