import { Component, HostListener, TemplateRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import {JumpingHorseComponent} from '../jumping-horse/jumping-horse.component';

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
  </div>
  `,
  styleUrls: ['./arena.component.scss']
})
export class ArenaComponent implements OnInit {

  constructor() { }

  jumpStart = true;
  horse: TemplateRef<JumpingHorseComponent>;

  @ViewChild('start', {read: ViewContainerRef}) startContainer: ViewContainerRef;
  @ViewChild('end', {read: ViewContainerRef}) endContainer: ViewContainerRef;

  ngOnInit() {}

  @HostListener('click') handleClick() {
    this.jumpStart = !this.jumpStart;
  }
}
