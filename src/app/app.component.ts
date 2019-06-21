import { Component } from '@angular/core';
import { NgxToastsService } from 'projects/kurtz1993/ngx-toasts/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'toasts';

  constructor(private toastService: NgxToastsService) {}

  createToast(toastType: 'success' | 'error' | 'warning' | 'info'): void {
    this.toastService.showToast({ type: toastType, message: 'Hello' });
  }
}
