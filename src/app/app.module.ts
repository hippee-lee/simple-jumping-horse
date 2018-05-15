import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {EmptyAnchorComponent, JumpingHorseComponent} from './jumping-horse/jumping-horse.component';
import { ArenaComponent } from './arena/arena.component';
import { JumpingHorseWrapperComponent } from './jumping-horse-wrapper/jumping-horse-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    JumpingHorseComponent,
    ArenaComponent,
    EmptyAnchorComponent,
    JumpingHorseWrapperComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [JumpingHorseWrapperComponent, EmptyAnchorComponent]
})
export class AppModule { }
