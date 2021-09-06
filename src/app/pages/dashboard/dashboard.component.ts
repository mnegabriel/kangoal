import { Component, OnInit } from '@angular/core';
import { IBoard } from 'src/app/interfaces/IBoard';
import { BoardService } from 'src/app/services/board.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  board?: IBoard

  constructor(
    private boardService: BoardService
  ) { }

  ngOnInit(): void {
    this.getBoard()
  }

  getBoard() {
    this.boardService.getBoard().subscribe(
      data => {
        this.board = data
      }
    )
  }
}
