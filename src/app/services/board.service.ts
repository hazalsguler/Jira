import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  public boards: Array<any> = [];
  constructor() {
    debugger
    let str = localStorage.getItem('boards');
    if(str != null)
    {
      this.boards = JSON.parse(str);
    }
   }

  public createBoard(title: any) {
    let neweBoardObj = {
      title:title, 
      cards:[]
    }
    this.boards.push(neweBoardObj);
    localStorage.setItem('boards',JSON.stringify(this.boards));
  }
  public deleteBoard(boardNumber: number) {
    this.boards.splice(boardNumber, 1);
    
    localStorage.setItem('boards',JSON.stringify(this.boards));
  }
}
