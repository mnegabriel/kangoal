import { v4 as uuidV4 } from 'uuid'
import { ITask } from '../interfaces/ITask'

export default class BoardColumn {
  id: string = uuidV4()
  listId: string
  title: string
  tasks: ITask[] = []

  constructor(columName: string) {
    this.title = columName
    this.listId = "list-" + this.createListId(columName)
  }

  private createListId(name: string) {
    let id = name
      .toLocaleLowerCase()
      .split(" ")
      .map((str, i) => {
        if (i) str = str[0].toUpperCase() + str.substring(1)
        return str
      })
      .join('')

    return id
  }
}
