import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {JumpingHorseComponent} from './jumping-horse/jumping-horse.component';
import { ArenaComponent } from './arena/arena.component';
import { JumpingHorseWrapperComponent } from './jumping-horse-wrapper/jumping-horse-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    JumpingHorseComponent,
    ArenaComponent,
    JumpingHorseWrapperComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [JumpingHorseWrapperComponent]
})
export class AppModule { }
