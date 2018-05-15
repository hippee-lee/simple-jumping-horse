import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ArenaComponent} from '../arena/arena.component';

@Component({
  selector: 'app-jumping-horse-wrapper',
  template: `
    <ng-template #portal>
        <ng-content></ng-content>
    </ng-template>
    <ng-container [ngTemplateOutlet]="templateRef"></ng-container>
  `,
  styleUrls: ['./jumping-horse-wrapper.component.scss']
})
export class JumpingHorseWrapperComponent implements OnInit {

  @ViewChild('portal') templateRef: TemplateRef<any>;

  constructor(private arena: ArenaComponent) { }

  ngOnInit() {
    this.arena.horse = this.templateRef;
  }

}
