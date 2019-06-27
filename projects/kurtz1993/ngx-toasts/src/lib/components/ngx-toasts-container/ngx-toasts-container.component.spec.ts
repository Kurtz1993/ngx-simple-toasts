import { DebugElement, NgModule } from '@angular/core';
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { NgxToastComponent } from '../ngx-toast/ngx-toast.component';
import { NgxToastsContainerComponent } from './ngx-toasts-container.component';
import { NgxToastConfig } from '../../models/toast-config.model';

@NgModule({
  declarations: [NgxToastComponent, NgxToastsContainerComponent],
  entryComponents: [NgxToastComponent],
  exports: [NgxToastComponent, NgxToastsContainerComponent],
  imports: [CommonModule],
})
class AppTestModule {}

describe('NgxToastsContainerComponent', () => {
  let config: NgxToastConfig;
  let component: NgxToastsContainerComponent;
  let fixture: ComponentFixture<NgxToastsContainerComponent>;
  let elm: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppTestModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxToastsContainerComponent);
    component = fixture.componentInstance;
    elm = fixture.debugElement;
    config = {
      message: '',
      timeout: 1000,
      type: 'success',
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
