import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../comment';
import { FormBuilder, Validators } from '@angular/forms';
import { CommentService } from '../comment.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  comments: Comment[]

  @Input()
  blog_id: string

  @Input()
  blog_type: string

  commentForm = this.fb.group({
    body: ['', Validators.required],
    name: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]]
  })

  constructor(private fb: FormBuilder, private commentService: CommentService, private router: Router, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.getCommentsByArticleId()
  }

  onSubmit() {
    let that = this;
    this.commentForm.value.parent_id = this.blog_id
    this.commentForm.value.parent_type = 'Blog'
    this.commentService.createComment(this.commentForm.value).subscribe(res => {
      that.comments.unshift(res)
      that.commentForm.reset()
    })
  }

  getCommentsByArticleId() {
    let that = this;
    that.commentService.getCommentsByArticleId(this.blog_id, this.blog_type).subscribe(res => {
      that.comments = res
    })
  }

}
