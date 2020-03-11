import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../blog';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { BlogService } from '../blog.service';
import { switchMap } from 'rxjs/operators';
import { AuthService } from '../../auth/auth.service';
import { Title, Meta } from '@angular/platform-browser';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {

  blog$: Observable<Blog>;

  relatedBlogs$: Observable<Blog[]>;

  tagCloud$: Observable<string[]>;

  public user: any;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private blogService: BlogService,
    private titleService: Title,
    private metaService: Meta,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit() {
    this.authService.me().subscribe(data => {
      this.user = data.user;
    });
    this.getBlogById()
    this.getSiteTags()
  }

  getBlogById() {
    this.blog$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.blogService.getBlogById(params.get('id'))
      )
    )
    this.blog$.subscribe(blog => {
      this.getRelativeBlogs(blog)
      this.titleService.setTitle(blog.title);
      this.metaService.updateTag({ name: 'description', content: blog.title })
      let keyWords = (this.metaService.getTag('name= "keywords"') && this.metaService.getTag('name= "keywords"').content) || '创新方法,创新驿站,创新驿路,创新事件,创新,创新的事情,创新方法论,';
      keyWords += blog.tags.join(',')
      this.metaService.updateTag({ name: 'keywords', content: keyWords })
    })
  }

  getRelativeBlogs(blog) {
    this.relatedBlogs$ = this.blogService.getRelativeBlogs(blog._id, blog.tags[0])
  }

  getSiteTags() {
    this.tagCloud$ = this.blogService.tagCloud();
  }

  deleteBlog(id) {
    if (confirm('确认要删除此blog吗？')) {
      this.blogService.deleteBlogById(id).subscribe(res => {
        this.router.navigate([`/blogs/`])
      })
    }
  }

  scrollTop() {
    if (isPlatformBrowser(this.platformId)) {
      // Client only code.
      window.scrollTo(0, 0);
    }
  }
}
