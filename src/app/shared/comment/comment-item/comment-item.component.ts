import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Comment } from '../comment';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.scss']
})
export class CommentItemComponent implements OnInit {

  private _comments: Comment[]

  @Input()
  set comments(comments: Comment[]) {
    this._comments = comments
  }

  get comments() {
    return this._comments
  }

  @Output()
  OnDelete: EventEmitter<Comment> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  commentDelete(id: string){
    this.OnDelete.emit(new Comment())
  }

}
