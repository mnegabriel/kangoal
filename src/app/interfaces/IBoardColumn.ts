import { ITask } from "./ITask";

export interface IBoardColumn {
  id: string
  listId: string
  title: string
  tasks: ITask[]
}
