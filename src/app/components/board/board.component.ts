import { Component, Input, OnInit } from '@angular/core';

import { IBoard } from 'src/app/interfaces/IBoard';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  @Input() board!: IBoard

  columnIds!: string[]

  constructor() { }

  ngOnInit(): void {
    this.columnIds = this.getArrayOfColumnIds()
  }

  getArrayOfColumnIds() {
    return this.board.columns.map(c => c.id)
  }

}
