import { Component, Input, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

import { IBoardColumn } from 'src/app/interfaces/IBoardColumn';
import { BoardService } from 'src/app/services/board.service';

@Component({
  selector: 'app-task-column',
  templateUrl: './task-column.component.html',
  styleUrls: ['./task-column.component.scss']
})
export class TaskColumnComponent implements OnInit {
  @Input() column!: IBoardColumn;
  @Input() allColumnsIds!: string[]

  hovering: boolean = false

  otherColumnsIds: string[] = []

  constructor(
    private boardService: BoardService
  ) { }

  ngOnInit(): void {
    this.otherColumnsIds = this.allColumnsIds.filter(id => id !== this.column.id)
  }

  addTaskToColumn(columnName: string, task: string) {
    this.boardService.addTaskToBoard(columnName, task)
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log(event)
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
