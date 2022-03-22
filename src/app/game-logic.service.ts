import { Injectable } from '@angular/core';
import { BOARD_SIZE } from './board/board.component';
import { BoardInfo, MarkType } from './constant';
import { GameStateServiceService } from './game-state-service.service';

@Injectable({
  providedIn: 'root'
})
export class GameLogicService {

  constructor(private gameState: GameStateServiceService) { }

  flipLiveDeathMark(i: number, j: number) {
    this.gameState.flipLiveDeathMark(i, j);
  }

  private countLiveCell (i: number, j: number): number{
    let count: number = 0;

    if(this.gameState.board[i+1 < BOARD_SIZE ? i+1:0][j] === '○') count = count + 1;
    if(this.gameState.board[i-1 < 0 ?0:i-1][j] === '○') count = count + 1;
    if(this.gameState.board[i][j+1 < BOARD_SIZE ? j+1:0] === '○') count = count + 1;
    if(this.gameState.board[i][j-1 < 0 ? 0:j-1] === '○') count = count + 1;
    if(this.gameState.board[i+1 < BOARD_SIZE ? i+1:0][j+1 < BOARD_SIZE ? j+1:0] === '○') count = count + 1;
    if(this.gameState.board[i-1 < 0 ?0:i-1][j-1 < 0 ? 0:j-1] === '○') count = count + 1;

    return count;


  }

  nextAge() {
    let tmpBoard: BoardInfo = Array.from(new Array<MarkType[]>(BOARD_SIZE),
    () => new Array<MarkType>(BOARD_SIZE).fill(' '));
    const nowBoard: BoardInfo = this.gameState.board;
    for(let i = 0; i < BOARD_SIZE; i++){
      for(let j = 0; j < BOARD_SIZE; j++){
        let liveCount = this.countLiveCell(i, j);
        if(this.gameState.board[i][j] === '○'){
          tmpBoard[i][j] = ((liveCount <= 3) && (liveCount >= 2))?'○':' ';
        } else {
          tmpBoard[i][j] = liveCount === 3 ?'○':' ';
        }

      }
    }

    //i,jのセルの評価
    //評価の結果をnextボードに保存

    //全部終わったら、ボード全体の更新
    this.gameState.nextAgeBoard(tmpBoard);
    // this.gameState.flipLiveDeathMark(5, 5)
  }

}
