import {Component, ComponentFactory, ComponentFactoryResolver, ElementRef, OnInit, ViewContainerRef} from '@angular/core';
import {JumpingHorseWrapperComponent} from '../jumping-horse-wrapper/jumping-horse-wrapper.component';

let herdSize = 0;

@Component({
  selector: 'app-jumping-horse',
  template: `
    <div class="horse">🐴 {{brand}}</div>
  `,
  styleUrls: ['./jumping-horse.component.scss']
})
export class JumpingHorseComponent {
  brand: number;
  constructor(vcr: ViewContainerRef, cfr: ComponentFactoryResolver, el: ElementRef) {
    this.brand = ++herdSize;

    // NOTE: this is a factory for JumpingHorseWrapperComponents, it can be used to produce them dynamically and is how we can wrap the
    // JumpingHorseComponent inside of it.
    const factory: ComponentFactory<JumpingHorseWrapperComponent> = cfr.resolveComponentFactory(JumpingHorseWrapperComponent);
    const containerRef = vcr.createComponent(factory, undefined, undefined, [[el.nativeElement]]);
  }
}
