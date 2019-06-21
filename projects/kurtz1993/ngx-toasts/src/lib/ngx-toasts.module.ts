import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxToastComponent } from './components/ngx-toast/ngx-toast.component';
import { NgxToastsContainerComponent } from './components/ngx-toasts-container/ngx-toasts-container.component';
import { NgxToastsService } from './services/ngx-toasts.service';

@NgModule({
  declarations: [NgxToastComponent, NgxToastsContainerComponent],
  providers: [NgxToastsService],
  imports: [CommonModule],
  exports: [NgxToastComponent, NgxToastsContainerComponent],
})
export class NgxToastsModule {}
