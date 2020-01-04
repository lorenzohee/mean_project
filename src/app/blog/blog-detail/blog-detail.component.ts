import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../blog';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { BlogService } from '../blog.service';
import { switchMap } from 'rxjs/operators';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {

  blog$: Observable<Blog>;

  public user: any;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private blogService: BlogService
  ) { }

  ngOnInit() {
    this.authService.me().subscribe(data => {
      this.user = data.user;
    });
    this.getBlogById()
  }

  getBlogById() {
    this.blog$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.blogService.getBlogById(params.get('id'))
      )
    )
  }

  deleteBlog(id) {
    if (confirm('确认要删除此blog吗？')) {
      this.blogService.deleteBlogById(id).subscribe(res => {
        this.router.navigate([`/blogs/`])
      })
    }
  }

  scrollTop() {
    window.scrollTo(0, 0);
  }
}
