/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UxService } from './ux.service';

describe('UxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UxService]
    });
  });

  it('should ...', inject([UxService], (service: UxService) => {
    expect(service).toBeTruthy();
  }));
});
