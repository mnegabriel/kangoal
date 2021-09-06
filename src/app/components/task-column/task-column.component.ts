import { Component, Input, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

import { IBoardColumn } from 'src/app/interfaces/IBoardColumn';

@Component({
  selector: 'app-task-column',
  templateUrl: './task-column.component.html',
  styleUrls: ['./task-column.component.scss']
})
export class TaskColumnComponent implements OnInit {
  @Input() column!: IBoardColumn;
  @Input() allColumnsIds!: string[]

  otherColumnsIds: string[] = []

  constructor() { }

  ngOnInit(): void {
    this.otherColumnsIds = this.allColumnsIds.filter(id => id !== this.column.id)
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
