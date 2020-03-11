import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Blog } from '../blog';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-blog-index',
  templateUrl: './blog-index.component.html',
  styleUrls: ['./blog-index.component.scss']
})
export class BlogIndexComponent implements OnInit {

  blogs$: Observable<Blog[]>

  blogCount$: Observable<string>

  listParam: {}

  currentPage = 1

  public user: any;

  constructor(private authService: AuthService, private blogService: BlogService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.blogs$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.listParam = {
          page: params.get('page') || 1,
          blogType: params.get('blogType'),
          blogNum: 'all'
        }
        this.currentPage = Number.parseInt(params.get('page') || '1');
        window.scrollTo(0, 0);
        return this.blogService.getBlogList(this.listParam)
      })
    )
    this.blogCount$ = this.route.paramMap.pipe(
      switchMap(params => {
        return this.blogService.getBlogCount(this.listParam)
      })
    )
    this.authService.me().subscribe(data => {
      this.user = data.user;
    });
  }

  deleteBlog(id) {
    console.log(this.blogs$[2])
    if (confirm('确认要删除此blog吗？')) {
      this.blogService.deleteBlogById(id).subscribe(res => {
        this.blogs$ = this.blogService.getBlogList(this.listParam)
      })
    }
  }

  scrollTop() {
    window.scrollTo(0, 0);
  }
}
