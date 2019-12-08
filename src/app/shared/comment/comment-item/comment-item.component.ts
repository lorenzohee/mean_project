import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Comment } from '../../../comments/comment';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.scss']
})
export class CommentItemComponent implements OnInit {

  @Input()
  comments: Comment

  @Output()
  OnDelete: EventEmitter<Comment> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  commentDelete(id: string) {
    this.OnDelete.emit(new Comment())
  }

}
