import { IBoard } from "../interfaces/IBoard";

export const BOARD: IBoard = {
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
