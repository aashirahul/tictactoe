import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-game-result',
  templateUrl: './game-result.component.html',
  styleUrls: ['./game-result.component.css']
})
export class GameResultComponent {

  constructor() { }

  @Input()
  winner:any;

  @Output()
  playAgain = new EventEmitter<void>();

  onPlayAgain(){
    this.playAgain.emit();
  }
}

