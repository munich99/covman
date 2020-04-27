/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MovePermissionService } from './move-permission.service';

describe('Service: MovePermission', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovePermissionService]
    });
  });

  it('should ...', inject([MovePermissionService], (service: MovePermissionService) => {
    expect(service).toBeTruthy();
  }));
});
