import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { GameBoardComponent } from './game-board/game-board.component';
import { ScoreBoardComponent } from './score-board/score-board.component';
import { CellComponent } from './cell/cell.component';


@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    ScoreBoardComponent,
    CellComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
