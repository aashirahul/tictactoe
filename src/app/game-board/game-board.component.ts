import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {

  @Output()
  displayWinner: EventEmitter<any> = new EventEmitter();

  @Output()
  emitScore: EventEmitter<any> = new EventEmitter();
 
  gameArray:any[];
  currentPlayer: string="X";
  playerXScore: number=0;
  playerOScore: number=0;
  gameStatus:any;
  
  findCell(row,col){
    this.gameArray[row][col]=this.currentPlayer;
    this.currentPlayer = this.currentPlayer =='X' ? 'O':'X';
    this.gameStatus=this.checkGame();
    this.updateScore();
    this.popMessage();
  }

  updateScore(){
    if(this.gameStatus =='X'){
      this.playerXScore += 1;
    }
    if(this.gameStatus == 'O'){
      this.playerOScore +=1;
    }
  }

  popMessage(){
    if(this.gameStatus!=null){
      this.displayWinner.emit(this.gameStatus);
    }  
  }

  checkGame(){
    var winnerConditionOne=this.checkRow();
    var winnerConditionTwo=this.checkCol();
    var winnerConditionThree=this.checkDiagonalOne();
    var winnerConditionFour=this.checkDiagonalTwo();
    if(winnerConditionOne){
      return winnerConditionOne;
    }
    if(winnerConditionTwo){
      return winnerConditionTwo;
    }
    if(winnerConditionThree){
      return winnerConditionThree;
    }
    if(winnerConditionFour){
      return winnerConditionFour;
    }
    return null;
  }

  checkRow(){
    for(var row=0; row<=2;row++){
      var rowFirstValue = this.gameArray[row][0];
      if(!rowFirstValue) {
        continue;
      }
      for(var col=0; col<=2; col++){
        if(this.gameArray[row][col]!= rowFirstValue){
          break;
        }
        if(col==2){
          return rowFirstValue;
        }
      }
    }
    return null;
  }
  checkCol(){
    for(var col=0;col<=2;col++){
      var colFirstValue = this.gameArray[0][col];
      if(!colFirstValue ) {
        continue;
    }
      for(var row=0;row<=2;row++){
        if(this.gameArray[row][col]!=colFirstValue){
          break;
        }
        if(row==2){
        return colFirstValue;
        }
      }
    }
    return null;
  }
  checkDiagonalOne(){
    for(var dia=0; dia<=2;dia++){
      var diagonalFirstValue =this.gameArray[0][0];
      if(!diagonalFirstValue) {
        continue;
      }
      if(this.gameArray[dia][dia]!=diagonalFirstValue){
          break;
      }
      if(dia==2){
        return diagonalFirstValue;
      }
    }
    return null;
  }
   checkDiagonalTwo(){
    for(var dia=0; dia<=2;dia++){
      var diagonalFirstValue =this.gameArray[1][1];
      if(!diagonalFirstValue) {
        continue;
      }
      if(this.gameArray[dia][2-dia]!=diagonalFirstValue){
          break;
      }
      if(dia==2){
        return diagonalFirstValue;
      }
    }
    return null;
  }
 
  ngOnInit() {
    this.resetGame();
  }

  resetGame() {
    this.gameArray = Array(3);
    for(var i=0; i<3;i++){
    this.gameArray[i]= Array(3);
    }
  }
}
