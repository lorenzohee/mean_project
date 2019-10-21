import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Blog } from '../blog';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  blogs$: Observable<Blog[]>

  blogCount$: Observable<string>

  public user: any;

  constructor(private authService: AuthService, private blogService: BlogService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.blogs$ = this.route.queryParamMap.pipe(
      switchMap(params => {
        return this.blogService.getBlogList(params)
      })
    )
    this.blogCount$ = this.route.queryParamMap.pipe(
      switchMap(params => {
        return this.blogService.getBlogCount(params)
      })
    )
    this.authService.me().subscribe(data => {
      this.user = data.user;
    });
  }

  deleteBlog(id) {
    if (confirm('确认要删除此blog吗？')) {
      this.blogService.deleteBlogById(id).subscribe(res => {
        this.router.navigated = false;
        this.router.navigate([this.router.url]);
      })
    }
  }

  changePage(num: number) {
    let params = Object.assign({}, this.route.snapshot.queryParams);
    params.page = num;
    this.router.navigate(['/blogs'], {
      queryParams: params
    });
  }

}
