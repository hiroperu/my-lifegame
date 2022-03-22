import { Injectable } from '@angular/core';
import { BOARD_SIZE } from './board/board.component';
import { BoardInfo, MarkType } from './constant';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameStateServiceService {

  private mBoard: BoardInfo = Array.from(new Array<MarkType[]>(BOARD_SIZE),
    () => new Array<MarkType>(BOARD_SIZE).fill(' '));

  mBoardSubject: Subject<BoardInfo> = new Subject();

  private mLiveDeathMark: MarkType = '○';

  constructor() { }

  flipLiveDeathMark(i: number, j: number) {
    this.mBoard[i][j] = this.mBoard[i][j] === '○'?' ':'○';
  }

  // addLiveDeathMark(i: number, j: number) {
  // }

  get board(): BoardInfo {
    return this.mBoard;
  }

  get LiveDeathMark(): MarkType {
    return this.mLiveDeathMark;
  }

  // set board(nextBoard: BoardInfo) {
  //   this.mBoard = nextBoard;
  // } 

  nextAgeBoard(nextBoard: BoardInfo) {
    // this.mBoard = nextBoard;
    // this.mBoard = Array.from(nextBoard);
    for(let i = 0; i<BOARD_SIZE; i++){
      for(let j = 0; j<BOARD_SIZE; j++){
        this.mBoard[i][j] = nextBoard[i][j];
        // console.log(nextBoard[i][j]);
      }
    }
    // this.mBoard[5][5] = '○'
    // this.mBoard[0][0] = '○'
    //this.mBoardSubject.next(this.mBoard);
  }
}
