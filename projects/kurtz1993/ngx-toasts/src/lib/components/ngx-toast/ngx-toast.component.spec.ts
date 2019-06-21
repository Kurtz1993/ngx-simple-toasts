import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxToastComponent } from './ngx-toast.component';

describe('NgxToastsComponent', () => {
  let component: NgxToastComponent;
  let fixture: ComponentFixture<NgxToastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxToastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
