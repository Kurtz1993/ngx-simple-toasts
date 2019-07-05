import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentFactory,
  ComponentRef,
  HostBinding,
  ViewRef,
} from '@angular/core';
import { SubscriptionLike } from 'rxjs';

import { NgxToastConfig } from '../../models/toast-config.model';
import { NgxToastsService } from '../../services/ngx-toasts.service';
import { NgxToastComponent } from '../../components/ngx-toast/ngx-toast.component';

@Component({
  selector: 'ngx-toasts-container',
  template: `
    <ng-template class="ngx-toasts-container" #toastsContainer></ng-template>
  `,
  // tslint:disable-next-line: no-host-metadata-property
  host: {
    '[attr.role]': 'alert',
    '[attr.aria-live]': 'assertive',
    '[attr.aria-atomic]': 'true',
  },
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        pointer-events: none;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
      }
    `,
  ],
})
export class NgxToastsContainerComponent implements OnInit, OnDestroy {
  @ViewChild('toastsContainer', { read: ViewContainerRef, static: true })
  container: ViewContainerRef;

  @HostBinding('class.hidden')
  get isHidden(): boolean {
    return !this.viewRefs.size;
  }

  private factory: ComponentFactory<NgxToastComponent>;
  private viewRefs = new Map<number, ViewRef>();
  private idCounter = 0;
  private toastsSub: SubscriptionLike;

  constructor(
    private resolver: ComponentFactoryResolver,
    private toastsService: NgxToastsService
  ) {}

  ngOnInit() {
    this.container.clear();
    this.factory = this.resolver.resolveComponentFactory(NgxToastComponent);
    this.toastsSub = this.toastsService.toasts$.subscribe(this.createToast.bind(this));
  }

  ngOnDestroy() {
    this.toastsSub.unsubscribe();
  }

  /**
   * Creates a new toast with the given configuration.
   * @param config Toast configuration.
   */
  createToast(config: NgxToastConfig): void {
    config.id = config.id || this.idCounter++;
    const componentRef: ComponentRef<NgxToastComponent> = this.container.createComponent(
      this.factory,
      this.viewRefs.size
    );

    componentRef.instance.config = config;
    componentRef.instance.remove.subscribe(this.deleteToast.bind(this));
    this.viewRefs.set(config.id, componentRef.hostView);
  }

  /**
   * Deletes the toast that has the given id.
   * @param id ID of the toast to delete.
   */
  deleteToast(id: number): void {
    const viewIndex = this.container.indexOf(this.viewRefs.get(id));
    this.container.remove(viewIndex);
    this.viewRefs.delete(id);
  }
}
