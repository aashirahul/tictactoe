import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-score-board',
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.css']
})
export class ScoreBoardComponent implements OnInit {

  constructor() { }

  @Input()
  playerXScore:any;

  @Input()
  playerOScore:any;


  ngOnInit() {
  }

}
