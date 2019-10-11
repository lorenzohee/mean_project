import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Blog } from '../blog';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  blogs$: Observable<Blog[]>

  blogCount$: Observable<string>

  constructor(private blogService: BlogService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getBlogList();
    this.getBlogCount();
  }

  getBlogList(pageNum: number = 1) {
    this.blogs$ = this.route.paramMap.pipe(
      switchMap(params => {
        return this.blogService.getBlogList({ page: pageNum })
      })
    )
  }

  getBlogCount() {
    this.blogCount$ = this.route.paramMap.pipe(
      switchMap(params => {
        return this.blogService.getBlogCount()
      })
    )
  }

  deleteBlog(id) {
    if (confirm('确认要删除此blog吗？')) {
      this.blogService.deleteBlogById(id).subscribe(res => {
        this.getBlogList();
      })
    }
  }

  changePage(num: number) {
    this.getBlogList(num);
  }

}
