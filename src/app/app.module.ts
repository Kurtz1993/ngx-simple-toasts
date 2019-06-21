import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxToastsModule } from 'projects/kurtz1993/ngx-toasts/src/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxToastsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
