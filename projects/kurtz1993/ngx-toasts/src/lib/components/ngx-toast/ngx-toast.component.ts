import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  HostBinding,
  HostListener,
} from '@angular/core';
import { timer } from 'rxjs';

import { NgxToastConfig } from '../../models/toast-config.model';

const BASE_CLASS = 'ngx-toast';
const CLOSING_CLASS = `${BASE_CLASS}--closing`;

@Component({
  selector: 'ngx-toast',
  template: `
    <div
      [className]="baseClass + '__container'"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <p [className]="baseClass + '__message'">
        {{ config.message }}
      </p>
    </div>

    <div
      *ngIf="config.timeout"
      class="progressbar"
      aria-hidden="true"
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
  componentClasses: string = BASE_CLASS;
  get animationDuration(): string {
    return `${this.config.timeout}ms`;
  }

  baseClass = BASE_CLASS;

  ngOnInit() {
    this.componentClasses += ` ${BASE_CLASS}--${this.config.type}`;

    if (this.config.timeout) {
      timer(this.config.timeout).subscribe({
        complete: () => this.closeToast(),
      });
    }
  }

  @HostListener('click')
  closeToast() {
    if (this.componentClasses.includes(CLOSING_CLASS)) {
      return;
    }

    this.componentClasses += ` ${CLOSING_CLASS}`;
    timer(500).subscribe({
      complete: () => this.remove.emit(this.config.id),
    });
  }
}
