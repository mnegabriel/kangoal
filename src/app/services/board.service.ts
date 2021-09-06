import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IBoard } from '../interfaces/IBoard';
import { BOARD } from '../mocks/board';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  board: IBoard = BOARD
  constructor() { }

  getBoard(): Observable<IBoard> {
    return of(this.board)
  }

  addTaskToBoard(columnName: string, task: string) {
    const columnIndex = this.board.columns.findIndex(col => col.title === columnName)
    if (columnIndex >= 0) this.board.columns[columnIndex].tasks.push(task)
  }
}

