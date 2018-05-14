import { Component, HostListener, TemplateRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-arena',
  template: `
  <div class="arena">
    <div class="arena-box" #start>
      <ng-container *ngIf="jumpStart" [ngTemplateOutlet]="horse"></ng-container>
    </div>
    <div class="fence"></div>
    <div class="arena-box" #end>
      <ng-container *ngIf="!jumpStart" [ngTemplateOutlet]="horse"></ng-container>
    </div>
    <ng-template #horse>
        <ng-content></ng-content>
    </ng-template>
  </div>
  `,
  styleUrls: ['./arena.component.scss']
})
export class ArenaComponent implements OnInit {

  constructor() { }

  jumpStart = true;

  // @ViewChild("horse") horse: ElementRef;
  @ViewChild('horse') horse: TemplateRef<any>;
  @ViewChild('start', {read: ViewContainerRef}) startContainer: ViewContainerRef;
  @ViewChild('end', {read: ViewContainerRef}) endContainer: ViewContainerRef;

  // @ViewChild("outside", {read: ViewContainerRef}) outsideContainer: ViewContainerRef;
  // @ViewChild("inside", {read: ViewContainerRef}) insideContainer: ViewContainerRef;

  ngOnInit() {
    /**
     * Idea:
     * 1. Grab the reference to the horse template
     * 2. Project it into the #start template ref
     * 3. On click event move it to the #end template ref
     * 4. Repeat swapping behavior on subsequent clicks
     */
    // this.outsideContainer.createEmbeddedView(this.projected);
    this.startContainer.createEmbeddedView(this.horse);
  }

  @HostListener('click') handleClick() {
    this.jumpStart = !this.jumpStart;
  }
}
