import { Injectable } from '@angular/core';
import { v4 as uuidV4 } from 'uuid'

import { ITask } from '../interfaces/ITask';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  createTask(taskText: string): ITask {
    return {
      id: uuidV4(),
      title: taskText
    }
  }
}
