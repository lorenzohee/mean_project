import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Blog } from '../blog';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  blogs$: Observable<Blog[]>

  blogCount$: Observable<string>

  currentPage = 1

  public user: any;

  constructor(private authService: AuthService, private blogService: BlogService,
    private titleService: Title,
    private metaService: Meta, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.blogs$ = this.route.paramMap.pipe(
      switchMap(params => {
        let listParam = {
          page: params.get('page') || 1,
          blogType: params.get('blogType'),
          tags: params.get('tags')
        }
        this.currentPage = Number.parseInt(params.get('page') || '1');
        window.scrollTo(0, 0);
        return this.blogService.getBlogList(listParam)
      })
    )
    this.blogCount$ = this.route.paramMap.pipe(
      switchMap(params => {
        let listParam = {
          blogType: params.get('blogType'),
          tags: params.get('tags')
        }
        return this.blogService.getBlogCount(listParam)
      })
    )
    this.authService.me().subscribe(data => {
      this.user = data.user;
    });

    this.titleService.setTitle('创新驿路');
    this.metaService.updateTag({ name: 'description', content: '创新驿路-提供最新创新方法，创新事务' })
    this.metaService.updateTag({ name: 'keywords', content: "创新方法,创新驿站,创新驿路,创新事件,创新,创新的事情,创新方法论" })
  }

  deleteBlog(id) {
    if (confirm('确认要删除此blog吗？')) {
      this.blogService.deleteBlogById(id).subscribe(res => {
        this.router.navigated = false;
        this.router.navigate([this.router.url]);
      })
    }
  }

  scrollTop() {
    window.scrollTo(0, 0);
  }

}
