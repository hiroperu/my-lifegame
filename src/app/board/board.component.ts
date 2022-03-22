import { Component, OnInit } from '@angular/core';
import { BoardInfo, MarkType } from '../constant';
import { GameStateServiceService } from '../game-state-service.service';
import { GameLogicService } from '../game-logic.service';

export const BOARD_SIZE = 10;

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  board: BoardInfo = this.gameState.board;

  BUTTON_STYLE = {
    fontSize: '40px',
    height: '50px',
    width: '50px'
  };


  constructor(private gameState: GameStateServiceService, 
    private gameLogic: GameLogicService) { }

  ngOnInit(): void {
  }

  onClickBoard(i: number, j: number) {
    this.gameLogic.flipLiveDeathMark(i, j);
  }
  
  async onClickStartBottun() {
    // for(let i = 0; i < 10; i++){
    //   this.gameLogic.nextAge();
    // }
    for(let i = 0; i<100; i++){
      this.gameLogic.nextAge();
      await new Promise(resolve => setTimeout(resolve, 3000)) // 3秒待つ
    }
    
    //this.gameState.flipLiveDeathMark(5, 5)
  }

}
