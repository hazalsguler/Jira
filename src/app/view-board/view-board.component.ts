import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoardService } from '../services/board.service';

@Component({
  selector: 'app-view-board',
  templateUrl: './view-board.component.html',
  styleUrls: ['./view-board.component.css']
})
export class ViewBoardComponent implements OnInit {
  boardIndex: any = 0;
  boardtitle: string = "";
  constructor(private route:ActivatedRoute, public boardService:BoardService) {}

  ngOnInit(){
    this.boardIndex = this.route.snapshot.paramMap.get('boardIndex');
    this.boardtitle = this.boardService.boards[this.boardIndex].title;
  }

}
