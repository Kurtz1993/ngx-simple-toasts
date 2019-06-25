import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { NgxToastComponent } from './ngx-toast.component';
import { NgxToastConfig } from '../../models/toast-config.model';

describe('NgxToastsComponent', () => {
  let config: NgxToastConfig;
  let component: NgxToastComponent;
  let fixture: ComponentFixture<NgxToastComponent>;
  let elm: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgxToastComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxToastComponent);
    component = fixture.componentInstance;
    elm = fixture.debugElement;
    config = {
      message: '',
      timeout: 1000,
      type: 'success',
    };
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close itself after the specified timeout', fakeAsync(() => {
    const closeSpy = spyOn(component, 'closeToast');

    component.config = config;
    fixture.detectChanges();

    tick(config.timeout);

    expect(closeSpy).toHaveBeenCalled();
  }));

  it('should show a progressbar with the correct animation duration if timeout is specified', () => {
    const durationInMs = `${config.timeout}ms`;
    component.config = config;

    fixture.detectChanges();
    const progressbar = elm.query(By.css('.progressbar'));

    expect(component.animationDuration).toBe(durationInMs);
    expect(progressbar).toBeTruthy();
    expect(progressbar.styles.animationDuration).toBe(durationInMs);
  });

  it('should not show a progressbar if timeout is set to 0', () => {
    config.timeout = 0;
    component.config = config;

    fixture.detectChanges();
    const progressbar = elm.query(By.css('.progressbar'));

    expect(progressbar).toBeNull();
  });

  it('should correctly set the modifier class based on the config type', () => {
    component.config = config;

    fixture.detectChanges();

    expect(component.componentClasses).toContain(`ngx-toast--${config.type}`);
  });

  it('should correctly place the message in the toast', () => {
    config.message = 'This is a test message';
    component.config = config;
    const msgParragraph = elm.query(By.css('.ngx-toast__message'));

    fixture.detectChanges();

    expect(msgParragraph.nativeElement.innerText).toContain(config.message);
  });

  it('should add a class for closing and wait 500ms and emit remove event when clicking on close button', fakeAsync(() => {
    config.timeout = 0;
    component.config = config;
    const closeBtn = elm.query(By.css('.ngx-toast__close'));
    const removeSpy = spyOn(component.remove, 'emit');

    fixture.detectChanges();
    closeBtn.triggerEventHandler('click', null);
    expect(component.componentClasses).toContain('ngx-toast--closing');

    tick(500);

    expect(removeSpy).toHaveBeenCalledWith(component.config.id);
  }));
});
