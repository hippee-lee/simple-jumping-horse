import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JumpingHorseComponent } from './jumping-horse/jumping-horse.component';
import { ArenaComponent } from './arena/arena.component';

@NgModule({
  declarations: [
    AppComponent,
    JumpingHorseComponent,
    ArenaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
