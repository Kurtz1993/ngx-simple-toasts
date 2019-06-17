import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxToastsComponent } from './ngx-toasts.component';

describe('NgxToastsComponent', () => {
  let component: NgxToastsComponent;
  let fixture: ComponentFixture<NgxToastsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxToastsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxToastsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
