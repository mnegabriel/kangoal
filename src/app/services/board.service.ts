import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IBoard } from '../interfaces/IBoard';
import { BOARD } from '../mocks/board';
import { TaskService } from './task.service';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  board: IBoard = BOARD
  constructor(
    private taskService: TaskService
  ) { }

  getBoard(): Observable<IBoard> {
    return of(this.board)
  }

  addTaskToBoard(columnName: string, task: string) {
    const columnIndex = this.board.columns.findIndex(col => col.title === columnName)
    if (columnIndex >= 0) {
      const newTask = this.taskService.createTask(task)
      this.board.columns[columnIndex].tasks.push(newTask)
    }
  }
}

