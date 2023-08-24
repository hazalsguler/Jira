import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoardService } from '../services/board.service';
import { MatDialog } from '@angular/material/dialog';
import { ViewBoardDialogComponent } from './view-board-dialog/view-board-dialog.component';

@Component({
  selector: 'app-view-board',
  templateUrl: './view-board.component.html',
  styleUrls: ['./view-board.component.css']
})
export class ViewBoardComponent implements OnInit {
  boardIndex: any = 0;
  boardtitle: string = "";
  constructor(private matdialog:MatDialog, private route:ActivatedRoute, public boardService:BoardService) {}

  ngOnInit(){
    this.boardIndex = this.route.snapshot.paramMap.get('boardIndex');
    this.boardtitle = this.boardService.boards[this.boardIndex].title;
  }
  openNewCardDialog() {
  const dialogRef = this.matdialog.open(ViewBoardDialogComponent, {
    width: '500px',
    data: { boardIndex: this.boardIndex, editMode: false}
  });
}
deleteCard(indexCard: number) {
  this.boardService.boards[this.boardIndex].cards.splice(indexCard, 1);
  this.boardService.updateDataToLocalStorage();
}
editCard(indexCard: number, card:any) {
  const dialogRef = this.matdialog.open(ViewBoardDialogComponent, {
    width: '500px',
    data: { boardIndex: this.boardIndex, cardIndex: indexCard, editMode: true}
});
}


}
