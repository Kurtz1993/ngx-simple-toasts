import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxToastComponent } from './components/ngx-toast/ngx-toast.component';

@NgModule({
  declarations: [NgxToastComponent],
  imports: [
    CommonModule
  ],
  exports: [NgxToastComponent]
})
export class NgxToastsModule { }
