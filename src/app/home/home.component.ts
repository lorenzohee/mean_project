import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog/blog.service';
import { Observable } from 'rxjs';
import { Blog } from '../blog/blog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  recommandBlog: Blog[];

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.getRecommandBlog();
  }

  getRecommandBlog() {
    this.blogService.getBlogList({ page: 1, tags: 'recommand' }).subscribe(res => {
      this.recommandBlog = res.slice(0, 3);
    })
  }

}
