import { v4 as uuidV4 } from 'uuid'

import { IBoardColumn } from '../interfaces/IBoardColumn'
import BoardColumn from './boardColumn.model'

export default class Board {
  id: string = uuidV4()
  name: string
  columns: IBoardColumn[]

  constructor(boardName: string) {
    this.id = uuidV4()
    this.name = boardName
    this.columns = [
      new BoardColumn('Backlog'),
      new BoardColumn('To-do'),
      new BoardColumn('Doing'),
      new BoardColumn('Done'),
    ]
  }
}
