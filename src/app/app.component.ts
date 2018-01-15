import { Component, ViewChild } from '@angular/core';

import { GameBoardComponent } from './game-board/game-board.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(GameBoardComponent)
  gameBoard: GameBoardComponent;

  title = 'app';

  showMessage:boolean=false;
  winner:any;
  score:any;

  getWinner(event){
    this.winner =event;
    this.showMessage=true;
  }


  onPlayAgain(){
    this.gameBoard.resetGame();
    this.showMessage = false;
  }
}


