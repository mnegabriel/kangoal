import { IBoardColumn } from "./IBoardColumn";

export interface IBoard {
  id: string
  name: string
  columns: IBoardColumn[]
}
