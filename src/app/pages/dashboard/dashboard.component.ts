import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop'
import { IBoard } from 'src/app/interfaces/IBoard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  board: IBoard = {
    name: 'Primeiro Board',
    columns: [
      {
        id: "backlog",
        title: "Backlog",
        tasks: [
          'lavar banheiro',
          'dormir de novo',
          'comer um brigadeiro',
        ]
      },
      {
        id: "to-do",
        title: "To-do",
        tasks: []
      },
      {
        id: "doing",
        title: "Doing",
        tasks: []
      },
      {
        id: "done",
        title: "Done",
        tasks: []
      },
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
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
