import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {

  constructor() { }

  rowNo: number;
  colNo: number;
  gameArray:any[];
  currentPlayer: string="X";
  playerXScore: number=0;
  playerOScore: number=0;
  cellValue:any;
  

  
  findCell(row,col){
    this.colNo = col;
    this.rowNo = row;
    this.gameArray[this.rowNo][this.colNo]=this.currentPlayer;
    this.currentPlayer = this.currentPlayer =='X' ? 'O':'X';
    var winConditionOne=this.checkRow();
    var winCOnditionTwo=this.checkCol();
    var winConditionThree=this.checkDiagonalOne();
    var winConditionFour=this.checkDiagonalTwo();
    console.log(winConditionFour);
  }
  checkRow(){
    for(var row=0; row<=2;row++){
      var rowFirstValue = this.gameArray[row][0];
      if(rowFirstValue == null || rowFirstValue == undefined) {
        continue;
      }
      for(var col=0; col<=2; col++){
        if(this.gameArray[row][col]!= rowFirstValue){
          break;
        }
        if(col==2){
          return true;
        }
      }
    }
    return false;
  }
  checkCol(){
    for(var col=0;col<=2;col++){
      var colFirstValue = this.gameArray[0][col];
      if(colFirstValue == null || colFirstValue == undefined) {
        continue;
    }
      for(var row=0;row<=2;row++){
        if(this.gameArray[row][col]!=colFirstValue){
          break;
        }
        if(row==2){
        return true;
        }
      }
    }
    return false;
  }
  checkDiagonalOne(){
    for(var dia=0; dia<=2;dia++){
      var diagonalFirstValue =this.gameArray[0][0];
      if(diagonalFirstValue == null || diagonalFirstValue == undefined) {
        continue;
      }
      if(this.gameArray[dia][dia]!=diagonalFirstValue){
          break;
      }
      if(dia==2){
        return true;
      }
    }
    return false;
  }
   checkDiagonalTwo(){
    for(var dia=0; dia<=2;dia++){
      var diagonalFirstValue =this.gameArray[1][1];
      if(diagonalFirstValue == null || diagonalFirstValue == undefined) {
        continue;
      }
      if(this.gameArray[dia][2-dia]!=diagonalFirstValue){
          break;
      }
      if(dia==2){
        return true;
      }
    }
    return false;
  }



 
  ngOnInit() {
    this.gameArray = Array(3);
    for(var i=0; i<3;i++){
    this.gameArray[i]= Array(3);
    }
  }

}
