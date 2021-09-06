import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-task-adder',
  templateUrl: './task-adder.component.html',
  styleUrls: ['./task-adder.component.scss']
})
export class TaskAdderComponent implements OnInit {
  newTask: string = ''
  @Output() addTask = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.addTask.emit(this.newTask)
    this.newTask = ''
  }

  onKeyDown(e: KeyboardEvent) {
    e.key === 'Enter' && this.onSubmit()
  }

}
