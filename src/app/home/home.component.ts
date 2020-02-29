import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog/blog.service';
import { Observable } from 'rxjs';
import { Blog } from '../blog/blog';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  recommandBlog: Blog[];

  constructor(private blogService: BlogService,
    private titleService: Title,
    private metaService: Meta,) { }

  ngOnInit() {
    this.getRecommandBlog();

    this.titleService.setTitle( '创新驿路' );
    this.metaService.updateTag({name: 'description', content: '创新驿路-提供最新创新方法，创新事务'})
    this.metaService.updateTag({name: 'keywords', content: "创新方法,创新驿站,创新驿路,创新事件,创新,创新的事情,创新方法论"})
  }

  getRecommandBlog() {
    this.blogService.getBlogList({ page: 1, tags: 'recommand' }).subscribe(res => {
      this.recommandBlog = res.slice(0, 3);
    })
  }

}
