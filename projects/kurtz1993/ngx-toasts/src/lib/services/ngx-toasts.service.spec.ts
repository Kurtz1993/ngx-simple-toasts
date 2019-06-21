import { TestBed } from '@angular/core/testing';

import { NgxToastsService } from './ngx-toasts.service';
import { NgxToastConfig } from '../models/toast-config.model';

describe('NgxToastsService', () => {
  let service: NgxToastsService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(NgxToastsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should emit a new toast when calling showToast()', () => {
    const config: NgxToastConfig = {
      message: 'hello',
      type: 'success',
    };

    const subjectSpy = spyOn(service['toastsHandler'], 'next');

    service.showToast(config);

    expect(subjectSpy).toHaveBeenCalled();
  });
});
