import { Injectable } from '@angular/core';
import { Observable, Subject, queueScheduler } from 'rxjs';
import { observeOn } from 'rxjs/operators';

import { NgxToastConfig } from '../models/toast-config.model';

@Injectable({
  providedIn: 'root',
})
export class NgxToastsService {
  toasts$: Observable<NgxToastConfig>;

  private defaultConfig: NgxToastConfig = {
    message: '',
    type: 'success',
    canBeClosed: true,
    timeout: 5000,
  };
  private toastsHandler = new Subject<NgxToastConfig>();

  constructor() {
    this.toasts$ = this.toastsHandler.pipe(observeOn(queueScheduler));
  }

  /**
   * Shows a toast on the screen with the given configuration.
   * @param config Configuration needed to show the toast.
   */
  showToast(config: NgxToastConfig): void {
    const toastConfig = { ...this.defaultConfig, ...config };
    this.toastsHandler.next(toastConfig);
  }
}
