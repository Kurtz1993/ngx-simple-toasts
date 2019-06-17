import { TestBed } from '@angular/core/testing';

import { NgxToastsService } from './ngx-toasts.service';

describe('NgxToastsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxToastsService = TestBed.get(NgxToastsService);
    expect(service).toBeTruthy();
  });
});
