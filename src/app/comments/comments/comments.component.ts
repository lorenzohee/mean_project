import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../comment';
import { AuthService } from '../../auth/auth.service';
import { BlogService } from '../../blog/blog.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  comments$: Observable<Comment[]>

  public user: any;

  constructor(private authService: AuthService, private commentService: CommentService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.comments$ = this.route.paramMap.pipe(
      switchMap(params => {
        return this.commentService.getComments(params)
      })
    )
    this.authService.me().subscribe(data => {
      this.user = data.user;
    });
  }

  deleteComment(id) {
    if (confirm('确认要删除此评论吗？')) {
      this.commentService.deleteCommentById(id).subscribe(res => {
        this.router.navigated = false;
        this.router.navigate([this.router.url]);
      })
    }
  }

}
