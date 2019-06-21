import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxToastComponent } from './components/ngx-toast/ngx-toast.component';
import { NgxToastsService } from './services/ngx-toasts.service';

@NgModule({
  declarations: [NgxToastComponent],
  providers: [NgxToastsService],
  imports: [
    CommonModule
  ],
  exports: [NgxToastComponent]
})
export class NgxToastsModule { }
