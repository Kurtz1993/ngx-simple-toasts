import { Component, OnInit, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { timer } from 'rxjs';

import { NgxToastConfig } from '../../models/toast-config.model';

@Component({
  selector: 'ngx-toast',
  template: `
    <div class="ngx-toast__container">
      <p class="ngx-toast__message">
        {{ config.message }}
      </p>
      <button class="ngx-toast__close" (click)="closeToast()" aria-label="Close toast">
        &times;
      </button>
    </div>

    <div
      *ngIf="config.timeout"
      class="progressbar"
      [ngStyle]="{ animationDuration: animationDuration, animationPlayState: 'running' }"
    ></div>
  `,
  styleUrls: ['./ngx-toast.component.scss'],
})
export class NgxToastComponent implements OnInit {
  @Input()
  config: NgxToastConfig;
  @Output()
  remove = new EventEmitter<number>();
  @HostBinding('class')
  componentClasses: string;
  get animationDuration(): string {
    return `${this.config.timeout}ms`;
  }

  ngOnInit() {
    this.componentClasses = `ngx-toast ngx-toast--${this.config.type}`;

    if (this.config.timeout) {
      timer(this.config.timeout).subscribe(null, null, () => {
        this.closeToast();
      });
    }
  }

  closeToast() {
    this.componentClasses += ' ngx-toast--closing';
    timer(500).subscribe(() => {}, null, () => {
      this.remove.emit(this.config.id);
    });
  }
}
