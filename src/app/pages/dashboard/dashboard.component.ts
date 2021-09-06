import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  lists = [
    {
      title: "Backlog",
      tasks: [
        'lavar banheiro',
        'dormir de novo',
        'comer um brigadeiro',
      ]
    },
    {
      title: "To-do",
      tasks: []
    },
    {
      title: "Doing",
      tasks: []
    },
    {
      title: "Done",
      tasks: []
    },
  ]

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
