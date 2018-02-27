import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {

  public board = [
  ];

  public placeRandom () {
    this.board = this.GenerateNumber(this.board);
  }

  constructor() {
  }

  ngOnInit() {
    this.InitBoard();

  }

  private InitBoard() {
    for (let i = 0; i < 4; i++) {
      this.board.push([]);
      for (let j = 0; j < 4; j++) {
        this.board[i].push(0);

      }
    }
    this.GenerateNumber(this.board);
    this.GenerateNumber(this.board);
  }

  private CheckFreeCells(board: number[][]) {
    let freeCells = [];
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board.length; j++) {
        if (board[i][j] === 0) {
          freeCells.push([i, j]);
        }
      }
    }
    return freeCells;

  }

  private GenerateNumber(board: number[][]) {
    let freeCells = this.CheckFreeCells(board);
    let randomInt = Math.random() * 100 < 75 ? 2 : 4;
    let randomCell = freeCells[Math.floor(Math.random() * freeCells.length)];
    board[randomCell[0]][randomCell[1]] = randomInt;
    return board;
  }

  private MoveLeft(board: number[][]) {
    return board;
  }

}
