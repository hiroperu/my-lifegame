import { Component } from '@angular/core';
import { GameStateServiceService } from './game-state-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-lifegame';
  board = this.gameState.board;

  constructor(private gameState: GameStateServiceService){
    this.gameState.mBoardSubject.subscribe(board => this.board = board);

  }

}
