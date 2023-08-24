import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { BoardService } from 'src/app/services/board.service';

@Component({
  selector: 'app-boards-dialog',
  templateUrl: './boards-dialog.component.html',
  styleUrls: ['./boards-dialog.component.css']
})
export class BoardsDialogComponent {
  constructor(private dialogRef: MatDialogRef<BoardsDialogComponent>, private boardsService: BoardService) {}

  boardForm = new FormGroup({
    title: new FormControl(null, [Validators.required])
  });

  olustur() {
    this.boardsService.createBoard(this.boardForm.get('title')?.value);
    this.dialogRef.close();
  }

  iptal() {
    this.dialogRef.close();

  }


}
